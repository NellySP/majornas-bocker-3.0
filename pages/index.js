import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/HomePage/Hero';

import { sanityClient, urlFor } from '../lib/sanity';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const heroQuery = `*[_type == 'homePage'][0]{
  pageBuilder[0]{
      heading,
      heroDescription,
      mainLink,
      url,
      heroImage,
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
  const heroLinkText = hero.pageBuilder.mainLink;
  const heroLinkTextUrl = hero.pageBuilder.url;
  const heroImage = hero.pageBuilder.heroImage;
  console.log(heroImage);

  // Calendar
  const calendarTitle = calendar.pageBuilder.sectionTitle;

  // About images
  const imageOne = aboutImages?.pageBuilder.imageOne;
  const imageTwo = aboutImages?.pageBuilder.imageTwo;
  console.log(imageOne);

  // News

  return (
    <div>
      <Hero
        heading={h1}
        description={heroDescription}
        linkText={heroLinkText}
        linkUrl={heroLinkTextUrl}
        heroImage={heroImage}
      ></Hero>
      {/* <h1>{h1}</h1>
      <p>{heroDescription}</p> */}
      <h2>{calendarTitle}</h2>
      <img src={urlFor(imageOne).url()} />
      <img src={urlFor(imageTwo).url()} />
    </div>
  );
}

export async function getStaticProps() {
  const hero = await sanityClient.fetch(heroQuery);
  const calendar = await sanityClient.fetch(calendarQuery);
  const aboutImages = await sanityClient.fetch(aboutQuery);

  return { props: { hero, calendar, aboutImages } };
}
