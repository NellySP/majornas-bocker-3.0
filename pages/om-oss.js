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
  }
  .hero-section-one {
    display: flex;
    flex-direction: column;
  }

  h1 {
    width: 80%;
  }
  .hero-section-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
  }

  .open-container {
    display: flex;
    flex-direction: row;
  }

  .open-hours {
    display: flex;
    flex-direction: column;
  }

  .loop-container p {
    margin: 1%;
    padding: 1%;
  }

  hr {
    border-top: 1px solid black;
    width: 100%;
    margin-bottom: 5%;
  }

  .divider {
    background-color: #e6dbe7;
    height: 100%;
    width: 36px;
    margin: 5%;
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

  #spinner {
    animation: image-spinner 8s linear infinite;
  }

  @keyframes image-spinner {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @media screen and (max-width: 670px) {
    h1 {
      width: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    h1 {
      width: 100%;
    }
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
  const openHours = aboutPage[0].pageBuilder[0].openingHours;
  const openHoursTitle = aboutPage[0].pageBuilder[0].openingHoursTitle;
  console.log(openHours);

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
              <img id="spinner" src={urlFor(aboutImage).url()} />
              <div className="open-container">
                <div className="divider"></div>
                <div className="open-hours">
                  <h2>{openHoursTitle}</h2>
                  {openHours &&
                    openHours.map((hours) => (
                      <div className="loop-container" key={hours._key}>
                        <p>{hours}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
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
    </div>
  );
}

export async function getStaticProps() {
  const aboutPage = await sanityClient.fetch(aboutPageQuery);
  // Assign aboutPage to props
  return { props: { aboutPage } };
}
