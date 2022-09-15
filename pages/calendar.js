<<<<<<< Updated upstream
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
=======
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CalendarHero from '../components/CalendarPage/CalendarHero';
>>>>>>> Stashed changes

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const calendarPageQuery = `*[_type == 'calendarPage']{
  pageBuilder
}`;

const calendarPageImageQuery = `*[_type == 'newsPage']{
  pageBuilder[]{image}
  }`;

export default function Home({ calendarPage, calendarPageImage }) {
    const calendarHeading = calendarPage[0].pageBuilder[0].heading;
    const calendarText = calendarPage[0].pageBuilder[0].heroDescription;
    const attendanceHeading = calendarPage[0].pageBuilder[0].attendanceHeading;
    const attendanceText = calendarPage[0].pageBuilder[0].attendanceText;
    const calendarPosts = calendarPage[0].pageBuilder;

;

/*   const images = newsPageImages[0].pageBuilder;
  console.log(images); */

  return (
<<<<<<< Updated upstream
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
=======
    <div>
        <CalendarHero 
        calendarHeading={calendarHeading}
        calendarText={calendarText}
        attendanceHeading={attendanceHeading}
        attendanceText={attendanceText}
        />
    
>>>>>>> Stashed changes
        {/* På nåt sätt exkludera det första resultatet - händelser i butik - mha javascript. Kan man göra det i loopen på något sätt? Also, få tag i bildfan */}
        {calendarPosts &&
          calendarPosts.slice(1).map((posts) => (
            // console.log(posts?.image)
            <div key={posts._key}>
              {posts?.image == undefined ? (
                <p>NO IMAGE. Här får vi lägga placeholder-bilder</p>
              ) : (
                <img src={urlFor(posts?.image).url()} />
              )}
              <h2>{posts.heading}</h2>
              <p>{posts.text}</p>
            </div>
          ))}
<<<<<<< Updated upstream
      </main>


=======
>>>>>>> Stashed changes
    </div>
  );
}

 export async function getStaticProps() {
  const calendarPage = await sanityClient.fetch(calendarPageQuery);
/*   const newsPageImages = await sanityClient.fetch(newsPageImageQuery); */
  // Assign aboutPage to props
  return { props: { calendarPage} };
}
