import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const calendarPageQuery = `*[_type == 'calendarPage']{
  pageBuilder
}`;

const calendarPageImageQuery = `*[_type == 'newsPage']{
  pageBuilder[]{image}
  }`;

export default function Home({ calendarPage }) {
    const calendarHeading = calendarPage[0].pageBuilder[0].heading;
    const calendarText = calendarPage[0].pageBuilder[0].heroDescription;
    const attendanceHeading = calendarPage[0].pageBuilder[0].attendanceHeading;
    const attendanceText = calendarPage[0].pageBuilder[0].attendanceText;
;

/*   const images = newsPageImages[0].pageBuilder;
  console.log(images); */

  return (
    <div className={styles.container}>
      <Head>
        <title>Kalender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{calendarHeading}</h1>
        <p>{calendarText}</p>
        <h2>{attendanceHeading}</h2>
        <p>{attendanceText}</p>
        {/* På nåt sätt exkludera det första resultatet - händelser i butik - mha javascript. Kan man göra det i loopen på något sätt? Also, få tag i bildfan */}
{/*         {calendarPost &&
          calendarPost.map((news) => (
            <div>
              {images &&
                images
                  .map((image) => <img src={urlFor(image).url()} />)}
              <p>{news.heading}</p>
              <p>{news.text}</p>
            </div>
          ))} */}
      </main>


    </div>
  );
}

 export async function getStaticProps() {
  const calendarPage = await sanityClient.fetch(calendarPageQuery);
/*   const newsPageImages = await sanityClient.fetch(newsPageImageQuery); */
  // Assign aboutPage to props
  return { props: { calendarPage} };
}
