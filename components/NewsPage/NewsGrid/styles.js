import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const NewsWrapper = styled.div `
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: center;
gap: 0;
`;

export const ImgWrapper = styled.div `
width: 570px;
height: 511px;
overflow: hidden;
`;

export const SinglePost = styled.div `
display: flex;
flex-direction:column;
`;

export const PostImg = styled.img`
object-fit: fill;

`;


export const PostHeading = styled.h3`

`;

export const PostDescription = styled.p`

`;

export const PostLink = styled.p`

`; 

const StyledNews = styled.div`
 

  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
  .news-grid-item {
    /* height: 100%; */
  }

  .news-grid-item img {
    width: 100%;
  }

  a {
    color: black;
    font-family: "Azeret Mono", monospace;
    font-size: var(--base-size);
    text-decoration: underline;
  }

  @media screen and (max-width: 670px) {
    .hero-container {
      flex-direction: column;
    }

    .news-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    h1 {
      width: 100%;
    }
  }
`;