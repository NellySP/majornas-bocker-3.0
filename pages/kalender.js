import CalendarHero from '../components/CalendarPage/CalendarHero';
import Grid from '../components/CalendarPage/Grid';
import Head from 'next/head';

import { sanityClient, urlFor } from '../lib/sanity';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const calendarPageQuery = `*[_type == 'calendarPage'][0]
{
  title,
  calendarHero,
}`;

const headQuery = `*[_type == "siteConfig"][0]{
  seo,
  logotype,
  nav[]->{
    title,
  }
}`;

export default function Home({ meta, calendarPage }) {
  const calendarHeading = calendarPage.calendarHero.heading;
  const calendarText = calendarPage.calendarHero.heroDescription;
  const attendanceHeading = calendarPage.calendarHero.attendanceHeading;
  const attendanceText = calendarPage.calendarHero.attendanceText;

  return (
    <div>
      <Head>
        <title>
          {meta.nav[1].title} – {meta.logotype}
        </title>
        <meta name='title' content={calendarHeading} />
        <meta name='description' content={meta.seo.description} />
        <meta property='og:url' content={meta.seo.url} />
        <meta property='og:title' content={calendarHeading} />
        <meta property='og:description' content={meta.seo.description} />
        <meta
          property='og:image'
          content={urlFor(meta.seo.socialImage).url()}
        />
      </Head>
      <CalendarHero
        calendarHeading={calendarHeading}
        calendarText={calendarText}
        attendanceHeading={attendanceHeading}
        attendanceText={attendanceText}
      />

      <Grid></Grid>
    </div>
  );
}

export async function getStaticProps() {
  const calendarPage = await sanityClient.fetch(calendarPageQuery);
  const meta = await sanityClient.fetch(headQuery);
  // Assign aboutPage to props
  return { props: { meta, calendarPage } };
}
