import styled from 'styled-components';
import Head from 'next/head';

import { sanityClient, urlFor } from '../lib/sanity';
import NewsHero from '../components/NewsPage/NewsHero';
import NewsGrid from '../components/NewsPage/NewsGrid';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const NewsPageWrapper = styled.div`
  width: 100%;
`;

const newsPageQuery = `*[_type == 'newsPage']{
  pageBuilder
}`;

const headQuery = `*[_type == "siteConfig"][0]{
  seo,
  logotype,
  nav[]->{
    title,
  }
}`;

export default function Home({ meta, newsPage }) {
  const newsHeading = newsPage[0].pageBuilder[0].heading;
  const newsText = newsPage[0].pageBuilder[0].heroDescription;
  const noticeHeading = newsPage[0].pageBuilder[0].noticeOfInterest;
  const noticeText = newsPage[0].pageBuilder[0].noticeText;

  return (
    <>
      <Head>
        <title>
          {meta.nav[2].title} – {meta.logotype}
        </title>
        <meta name='title' content={newsHeading} />
        <meta name='description' content={meta.seo.description} />
        <meta property='og:url' content={meta.seo.url} />
        <meta property='og:title' content={newsHeading} />
        <meta property='og:description' content={meta.seo.description} />
        <meta
          property='og:image'
          content={urlFor(meta.seo.socialImage).url()}
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={meta.seo.url} />
        <meta property='twitter:title' content={newsHeading} />
        <meta property='twitter:description' content={meta.seo.description} />
        <meta
          property='twitter:image'
          content={urlFor(meta.seo.socialImage).url()}
        />
      </Head>

      <NewsPageWrapper>
        <NewsHero
          newsHeading={newsHeading}
          newsText={newsText}
          noticeHeading={noticeHeading}
          noticeText={noticeText}
        />

        <NewsGrid></NewsGrid>
      </NewsPageWrapper>
    </>
  );
}

export async function getStaticProps() {
  const newsPage = await sanityClient.fetch(newsPageQuery);
  const meta = await sanityClient.fetch(headQuery);
  // Assign aboutPage to props
  return { props: { meta, newsPage } };
}
