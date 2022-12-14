import AboutHero from '../components/AboutPage/AboutHero';
import AboutGrid from '../components/AboutPage/AboutGrid';

import { sanityClient, urlFor } from '../lib/sanity';
import Head from 'next/head';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const aboutPageQuery = `*[_type == 'aboutPage']{
  pageBuilder
}`;

const headQuery = `*[_type == "siteConfig"][0]{
  seo,
  logotype,
  nav[]->{
    title,
  }
}`;

export default function Home({ meta, aboutPage }) {
  // Variables for about page
  const aboutHeading = aboutPage[0].pageBuilder[0].heading;
  const aboutText = aboutPage[0].pageBuilder[0].heroDescription;
  const aboutImage = aboutPage[0].pageBuilder[0].heroImage;
  const galleryImage1 = aboutPage[0].pageBuilder[1].gallery[0];
  const galleryImage2 = aboutPage[0].pageBuilder[1].gallery[1];
  const galleryImage3 = aboutPage[0].pageBuilder[1].gallery[2];
  const galleryImage4 = aboutPage[0].pageBuilder[1].gallery[3];
  const openingHoursText = aboutPage[0].pageBuilder[0].openingHours;
  const openingHoursTitle = aboutPage[0].pageBuilder[0].openingHoursTitle;
  console.log(openingHoursTitle);

  return (
    <>
      <Head>
        <title>
          {meta.nav[3].title} – {meta.logotype}
        </title>
        <meta name='title' content={aboutHeading} />
        <meta name='description' content={meta.seo.description} />
        <meta property='og:url' content={meta.seo.url} />
        <meta property='og:title' content={aboutHeading} />
        <meta property='og:description' content={meta.seo.description} />
        <meta
          property='og:image'
          content={urlFor(meta.seo.socialImage).url()}
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={meta.seo.url} />
        <meta property='twitter:title' content={aboutHeading} />
        <meta property='twitter:description' content={meta.seo.description} />
        <meta
          property='twitter:image'
          content={urlFor(meta.seo.socialImage).url()}
        />
      </Head>

      <AboutHero
        aboutHeading={aboutHeading}
        aboutText={aboutText}
        aboutImage={aboutImage}
        openingHoursHeading={openingHoursTitle}
        openingHoursText={openingHoursText}
      />

      <AboutGrid
        galleryImage1={galleryImage1}
        galleryImage2={galleryImage2}
        galleryImage3={galleryImage3}
        galleryImage4={galleryImage4}
      />
    </>
  );
}

export async function getStaticProps() {
  const aboutPage = await sanityClient.fetch(aboutPageQuery);
  const meta = await sanityClient.fetch(headQuery);

  // Assign aboutPage to props
  return { props: { meta, aboutPage } };
}
