import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { sanityClient, urlFor } from '../lib/sanity';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const heroQuery = `*[_type == 'homePage'][0]{
  pageBuilder[0]{
      heading,
      heroDescription,
  }
 }`;

const calendarQuery = `*[_type == 'homePage'][0]{
  pageBuilder[1]{
      sectionTitle,
  }
 }`;

const aboutQuery = `*[_type == 'homePage'][0]{
  pageBuilder[2]{
    imageOne,
    imageTwo
  }
 }`;

const newsQuery = `*[_type == 'homePage'][0]{
  pageBuilder[3]{
    
  }
 }`;

export default function Home({ hero, calendar, aboutImages }) {
  // console.log(nav);
  // Hero
  const h1 = hero.pageBuilder.heading;
  const heroDescription = hero.pageBuilder.heroDescription;

  // Calendar
  const calendarTitle = calendar.pageBuilder.sectionTitle;

  // About images
  const imageOne = aboutImages?.pageBuilder.imageOne;
  const imageTwo = aboutImages?.pageBuilder.imageTwo;
  // console.log(aboutImages.imageOne);

  // News

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{h1}</h1>

        <p className={styles.description}>{heroDescription}</p>

        <h2 className={styles.title}>{calendarTitle}</h2>

        <img src={urlFor(imageOne).url()} />
        <img src={urlFor(imageTwo).url()} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const hero = await sanityClient.fetch(heroQuery);
  const calendar = await sanityClient.fetch(calendarQuery);
  const aboutImages = await sanityClient.fetch(aboutQuery);

  return { props: { hero, calendar, aboutImages } };
}
