import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import AboutHero from '../components/AboutPage/AboutHero';
import AboutGrid from '../components/AboutPage/AboutGrid';

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const aboutPageQuery = `*[_type == 'aboutPage']{
  pageBuilder
}`;



export default function Home({ aboutPage }) {
  // Variables for about page
  const aboutHeading = aboutPage[0].pageBuilder[0].heading;
  const aboutText = aboutPage[0].pageBuilder[0].heroDescription;
  const aboutImage = aboutPage[0].pageBuilder[0].heroImage;
  const galleryImage1 = aboutPage[0].pageBuilder[1].gallery[0];
  const galleryImage2 = aboutPage[0].pageBuilder[1].gallery[1];
  const galleryImage3 = aboutPage[0].pageBuilder[1].gallery[2];
  const galleryImage4 = aboutPage[0].pageBuilder[1].gallery[3];
  const openingHoursText = aboutPage[0].pageBuilder[0].openingHours;
  const openingHoursTitle = aboutPage[0].pageBuilder[0].openingHoursTitle;
  console.log(openingHoursText);

  return (

    <div>
      <AboutHero 
      aboutHeading={aboutHeading}
      aboutText={aboutText}
      aboutImage={aboutImage}
      openingHoursTitle={openingHoursTitle}
      openingHoursText={openingHoursText}
      />
       
      <AboutGrid
        galleryImage1={galleryImage1}
        galleryImage2={galleryImage2}
        galleryImage3={galleryImage3}
        galleryImage4={galleryImage4}
       /> 
      
    </div>


          // <hr></hr>
          // <div className="gallery">
          //   <div>
          //     <img src={urlFor(galleryImage1).url()} />
          //   </div>
          //   <div className="middle-image-container">
          //     <div>
          //       <img src={urlFor(galleryImage2).url()} />
          //     </div>
          //     <div>
          //       <img src={urlFor(galleryImage3).url()} />
          //     </div>
          //   </div>
          //   <div>
          //     <img src={urlFor(galleryImage4).url()} />
          //   </div>
          // </div>
    //     </StyledAboutUs>
    //   </main>
    // </div>
  );
}

export async function getStaticProps() {
  const aboutPage = await sanityClient.fetch(aboutPageQuery);
  // Assign aboutPage to props
  return { props: { aboutPage } };
}
