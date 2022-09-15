import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/HomePage/Hero';
import GridSection from '../components/HomePage/GridSection';

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
    imageStore,
    internalLink,
  }
 }`;

export default function Home({ hero, calendar, aboutImages, newsLink }) {
  // console.log(nav);
  // Hero
  const h1 = hero.pageBuilder.heading;
  const heroDescription = hero.pageBuilder.heroDescription;
  const heroLinkText = hero.pageBuilder.mainLink;
  const heroLinkTextUrl = hero.pageBuilder.url;
  const heroImage = hero.pageBuilder.heroImage;
  // console.log(heroImage);

  // Calendar
  const calendarTitle = calendar.pageBuilder.sectionTitle;

  // About images
  const imageOne = aboutImages?.pageBuilder.imageOne;
  const imageTwo = aboutImages?.pageBuilder.imageTwo;
  // console.log(imageOne);

  // News
  const linkBlock = newsLink.pageBuilder.internalLink;
  const shopImage = newsLink?.pageBuilder.imageStore;
  console.log(shopImage);

  return (
    <div>
      <Hero
        heading={h1}
        description={heroDescription}
        linkText={heroLinkText}
        linkUrl={heroLinkTextUrl}
        heroImage={heroImage}
      />
      <GridSection
        calendarHeading={calendarTitle}
        calendarPageLinkText={'Se hela kalendern'}
        calendarPageUrl={'http://localhost:3000/kalender'}
        linkBlockUrl={linkBlock.slug}
        linkBlockTitle={linkBlock.title}
        storeImage={urlFor(shopImage).url()}
      />
      <img src={urlFor(imageOne).url()} />
      <img src={urlFor(imageTwo).url()} />
    </div>
  );
}

export async function getStaticProps() {
  const hero = await sanityClient.fetch(heroQuery);
  const calendar = await sanityClient.fetch(calendarQuery);
  const aboutImages = await sanityClient.fetch(aboutQuery);
  const newsLink = await sanityClient.fetch(newsQuery);

  return { props: { hero, calendar, aboutImages, newsLink } };
}
