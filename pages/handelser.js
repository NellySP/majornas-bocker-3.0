import styled from "styled-components";

import { sanityClient } from "../lib/sanity";
import NewsHero from "../components/NewsPage/NewsHero";
import NewsGrid from "../components/NewsPage/NewsGrid";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const NewsPageWrapper = styled.div`
  width: 100%;
`;

const newsPageQuery = `*[_type == 'newsPage']{
  pageBuilder
}`;

export default function Home({ newsPage }) {
  const newsHeading = newsPage[0].pageBuilder[0].heading;
  const newsText = newsPage[0].pageBuilder[0].heroDescription;
  const noticeHeading = newsPage[0].pageBuilder[0].noticeOfInterest;
  const noticeText = newsPage[0].pageBuilder[0].noticeText;

  return (
    <NewsPageWrapper>
      <NewsHero
        newsHeading={newsHeading}
        newsText={newsText}
        noticeHeading={noticeHeading}
        noticeText={noticeText}
      />

      <NewsGrid></NewsGrid>
    </NewsPageWrapper>
  );
}

export async function getStaticProps() {
  const newsPage = await sanityClient.fetch(newsPageQuery);

  // Assign aboutPage to props
  return { props: { newsPage } };
}
