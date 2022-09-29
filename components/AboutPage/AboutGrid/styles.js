import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const GridContainer = styled.div`
  border-top: 1px solid black;
  width: 100%;
  padding: 3rem 0 6rem 0;

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

    .firstImage {
      width: 100%;
      height: 21rem;
    }

    .thirdImage {
      margin-top: 0.75rem;
    }

    .middle-image-container,
    .fourthImage {
      width: calc(50% - 0.5rem);
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media ${device.tablet} {
    .gallery {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 1rem;

      .firstImage {
        width: 33%;
        height: auto;
      }

      div {
        width: 33%;
      }

      .thirdImage {
        margin-top: 0;
      }

      .middle-image-container,
      .fourthImage {
        width: 33%;
      }
    }

    .middle-image-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media ${device.laptop} {
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
