import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { sanityClient, urlFor } from '../lib/sanity';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const newsPageQuery = `*[_type == 'newsPage']{
  pageBuilder
}`;

const newsPageImageQuery = `*[_type == 'newsPage'][0]{
  pageBuilder[]{image}
  }`;

export default function Home({ newsPage, newsPageImages }) {
  const newsHeading = newsPage[0].pageBuilder[0].heading;
  const newsText = newsPage[0].pageBuilder[0].heroDescription;
  const noticeHeading = newsPage[0].pageBuilder[0].noticeOfInterest;
  const noticeText = newsPage[0].pageBuilder[0].noticeText;

  const singleNews = newsPage[0].pageBuilder;
  // console.log(singleNews);

  const images = newsPageImages?.pageBuilder;
  console.log(images);

  return (
    <div className={styles.container}>
      <Head>
        <title>Om oss</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>{newsHeading}</h1>
        <p>{newsText}</p>
        <h2>{noticeHeading}</h2>
        <p>{noticeText}</p>
        <h4>Här är loopen/galleriet</h4>
        {/* På nåt sätt exkludera det första resultatet - händelser i butik - mha javascript. Kan man göra det i loopen på något sätt? Also, få tag i bildfan */}
        {singleNews &&
          singleNews.map((news) => (
            <div>
              {images &&
                images.map((image) => (
                  <li>{/* <img src={urlFor(image).url()} /> */}</li>
                ))}
              <p>{news.heading}</p>
              <p>{news.text}</p>
            </div>
          ))}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const newsPage = await sanityClient.fetch(newsPageQuery);
  const newsPageImages = await sanityClient.fetch(newsPageImageQuery);
  // Assign aboutPage to props
  return { props: { newsPage, newsPageImages } };
}
