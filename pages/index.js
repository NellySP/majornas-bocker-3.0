import Hero from "../components/HomePage/Hero";
import GridSection from "../components/HomePage/GridSection";

import { sanityClient, urlFor } from "../lib/sanity";

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
      internalLinkText,
      internalLink[]->{
        slug,
        pageBuilder[1..4]{
          heading,
          date,
          
        }
      },
  }
 }`;

const aboutQuery = `*[_type == 'homePage'][0]{
  pageBuilder[2]{
    imageOne,
    imageTwo,
    internalLink[]->{
      title,
      slug
    }
  }
 }`;

const newsQuery = `*[_type == 'homePage'][0]{
  pageBuilder[3]{
    imageStore,
    internalLink[]->{
      title,
      slug
    },
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
  const calendarLinkText = calendar.pageBuilder.internalLinkText;
  const calendarLinkUrl = calendar.pageBuilder.internalLink[0];

  // About block
  const imageOne = aboutImages?.pageBuilder.imageOne;
  const imageTwo = aboutImages?.pageBuilder.imageTwo;
  const aboutLinkUrl = aboutImages.pageBuilder.internalLink[0];
  // console.log(aboutLinkUrl);

  // News
  const newsLinkUrl = newsLink.pageBuilder.internalLink[0];
  const shopImage = newsLink?.pageBuilder.imageStore;

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
        calendarPageLinkText={calendarLinkText}
        calendarPageUrl={calendarLinkUrl.slug.current}
        aboutImageOne={urlFor(imageOne).url()}
        aboutImageTwo={urlFor(imageTwo).url()}
        aboutPageLinkText={aboutLinkUrl.title}
        aboutPageUrl={aboutLinkUrl.slug.current}
        newsPageLinkText={newsLinkUrl.title}
        newsPageUrl={newsLinkUrl.slug.current}
        storeImage={urlFor(shopImage).url()}
      />
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
