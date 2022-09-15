import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import { sanityClient, urlFor } from "../lib/sanity";

// GROQ query cheat sheet https://www.sanity.io/docs/query-cheat-sheet

const aboutPageQuery = `*[_type == 'aboutPage']{
  pageBuilder
}`;

const StyledAboutUs = styled.div`
  .hero-container {
    display: flex;
    flex-direction: row;
    margin: 4%;
  }
  .hero-section-one {
    display: flex;
    flex-direction: column;
  }
  .hero-section-two {
    justify-content: center;
    align-items: center;
    justify-content: center;
  }

  .gallery {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .middle-image-container {
    display: flex;
    flex-direction: column;
  }

  .gallery img {
    width: 100%;
  }
`;

export default function Home({ aboutPage }) {
  // Variables for about page
  const h1 = aboutPage[0].pageBuilder[0].heading;
  const aboutText = aboutPage[0].pageBuilder[0].heroDescription;
  const aboutImage = aboutPage[0].pageBuilder[0].heroImage;
  const galleryImage1 = aboutPage[0].pageBuilder[1].gallery[0];
  const galleryImage2 = aboutPage[0].pageBuilder[1].gallery[1];
  const galleryImage3 = aboutPage[0].pageBuilder[1].gallery[2];
  const galleryImage4 = aboutPage[0].pageBuilder[1].gallery[3];
  return (
    <div>
      {/* <div className={styles.container}> */}
      <main className={styles.main}>
        <StyledAboutUs>
          <div className="hero-container">
            <div className="hero-section-one">
              <h1>{h1}</h1>
              <p>{aboutText}</p>
            </div>
            <div className="hero-section-two">
              <img src={urlFor(aboutImage).url()} />
            </div>
          </div>
          <div className="gallery">
            <div>
              <img src={urlFor(galleryImage1).url()} />
            </div>
            <div className="middle-image-container">
              <div>
                <img src={urlFor(galleryImage2).url()} />
              </div>
              <div>
                <img src={urlFor(galleryImage3).url()} />
              </div>
            </div>
            <div>
              <img src={urlFor(galleryImage4).url()} />
            </div>
          </div>
        </StyledAboutUs>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const aboutPage = await sanityClient.fetch(aboutPageQuery);
  // Assign aboutPage to props
  return { props: { aboutPage } };
}
