import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CalendarHero from '../components/CalendarPage/CalendarHero';
import Grid from '../components/CalendarPage/Grid';

import { sanityClient, urlFor } from '../lib/sanity';

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const calendarPageQuery = `*[_type == 'calendarPage'][0]
{
  title,
  calendarHero,
}`;

export default function Home({ calendarPage }) {
  const calendarHeading = calendarPage.calendarHero.heading;
  const calendarText = calendarPage.calendarHero.heroDescription;
  const attendanceHeading = calendarPage.calendarHero.attendanceHeading;
  const attendanceText = calendarPage.calendarHero.attendanceText;

  return (
    <div>
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
  // Assign aboutPage to props
  return { props: { calendarPage } };
}
