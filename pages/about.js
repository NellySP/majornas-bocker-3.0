import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const aboutPageQuery = `*[_type == 'aboutPage']{
  pageBuilder
}`;

export default function Home({ aboutPage }) {
  // Variables for about page
  const h1 = aboutPage[0].pageBuilder[0].heading;
  const aboutText = aboutPage[0].pageBuilder[0].heroDescription;
  const aboutImage = aboutPage[0].pageBuilder[0].heroImage;
  const galleryImage1 = aboutPage[0].pageBuilder[1].gallery[0];
  const galleryImage2 = aboutPage[0].pageBuilder[1].gallery[1];
  const galleryImage3 = aboutPage[0].pageBuilder[1].gallery[2];
  const galleryImage4 = aboutPage[0].pageBuilder[1].gallery[3];
  return (
    <div className={styles.container}>
      <Head>
        <title>Om oss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{h1}</h1>
        <p>{aboutText}</p>
        <img src={urlFor(aboutImage).url()} />
        <div className={styles.gallery}>
          <img src={urlFor(galleryImage1).url()} />
          <img src={urlFor(galleryImage2).url()} />
          <img src={urlFor(galleryImage3).url()} />
          <img src={urlFor(galleryImage4).url()} />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const aboutPage = await sanityClient.fetch(aboutPageQuery);
  // Assign aboutPage to props
  return { props: { aboutPage } };
}
