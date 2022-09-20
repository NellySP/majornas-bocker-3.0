
import styles from "../styles/Home.module.css";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CalendarHero from '../components/CalendarPage/CalendarHero';
import Grid from '../components/CalendarPage/Grid';

import { sanityClient, urlFor } from '../lib/sanity';

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
  /*   const newsPageImages = await sanityClient.fetch(newsPageImageQuery); */
  // Assign aboutPage to props
  return { props: { calendarPage } };
}
