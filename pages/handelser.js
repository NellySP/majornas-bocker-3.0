import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const newsPageQuery = `*[_type == 'newsPage']{
  pageBuilder
}`;

const StyledNews = styled.div`
  .hero-container {
    display: flex;
    flex-direction: row;
  }
  .hero-section-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h1 {
    width: 80%;
  }

  .hero-section-two {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
  .divider {
    background-color: #b1d2c3;
    height: 30%;
    width: 36px;
    margin: 5%;
  }

  hr {
    border-top: 1px solid black;
    width: 100%;
    margin-bottom: 5%;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
  .news-grid-item {
    /* height: 100%; */
  }

  .news-grid-item img {
    width: 100%;
  }

  a {
    color: black;
    font-family: "Azeret Mono", monospace;
    font-size: var(--base-size);
    text-decoration: underline;
  }

  @media screen and (max-width: 670px) {
    .hero-container {
      flex-direction: column;
    }

    .news-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    h1 {
      width: 100%;
    }
  }
`;

export default function Home({ newsPage }) {
  const newsHeading = newsPage[0].pageBuilder[0].heading;
  const newsText = newsPage[0].pageBuilder[0].heroDescription;
  const noticeHeading = newsPage[0].pageBuilder[0].noticeOfInterest;
  const noticeText = newsPage[0].pageBuilder[0].noticeText;
  const singleNews = newsPage[0].pageBuilder;
  console.log(singleNews);

  return (
    <div>
      {/* <div className={styles.container}> */}
      <Head>
        <title>{newsHeading}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StyledNews>
          <div className="hero-container">
            <div className="hero-section-one">
              <h1>{newsHeading}</h1>
              <p>{newsText}</p>
            </div>
            <div className="hero-section-two">
              <div className="divider"></div>
              <div>
                <h2>{noticeHeading}</h2>
                <p>{noticeText}</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="news-grid">
            {singleNews &&
              singleNews.slice(1).map((news) => (
                <div className="news-grid-item" key={news._key}>
                  <div className={styles.gallery}>
                    <img src={urlFor(news.image).url()} />
                  </div>
                  <h2>{news.heading}</h2>
                  <p>{news.text}</p>
                  <a href={news.link}>Intresseanmälan här!</a>
                </div>
              ))}
          </div>
        </StyledNews>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const newsPage = await sanityClient.fetch(newsPageQuery);

  // Assign aboutPage to props
  return { props: { newsPage } };
}
