import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";


export const GridContainer = styled.div`
hr {
    border-top: 1px solid black;
    width: 100%;
    margin-bottom: 2rem;
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