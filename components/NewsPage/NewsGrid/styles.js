import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const NewsWrapper = styled.div `
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 2vw;
grid-row-gap: 2vw;
margin-top: 3.3rem;
`;

export const ImgWrapper = styled.div `
max-width: 100%;
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
font-size: var(--h3-desktop);
font-family: var(--azeret-mono);
font-weight: 400;
`;

export const PostDescription = styled.p`

`;

export const PostLink = styled.p`

a {
    color: black;
    font-size: var(--small-link-desktop);
    text-decoration: underline;
    font-weight: 200;
}

`; 

//const StyledNews = styled.div`

//   @media screen and (max-width: 670px) {
//     .hero-container {
//       flex-direction: column;
//     }

//     .news-grid {
//       grid-template-columns: repeat(1, 1fr);
//     }

//     h1 {
//       width: 100%;
//     }
//   }
//`;