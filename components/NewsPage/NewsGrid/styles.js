import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* switch to grid in tablet */
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    margin-top: 3.3rem;
  }
`;

export const SinglePost = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const PostImg = styled.img`
  object-fit: fill;
  width: 100%;
`;

export const PostHeading = styled.h3`
  font-size: var(--h3-desktop);
  font-family: var(--azeret-mono);
  font-weight: 400;
`;

export const PostDescription = styled.p``;

export const PostLink = styled.p`
  a {
    color: black;
    font-size: var(--small-link-desktop);
    text-decoration: underline;
    font-weight: 200;
  }
`;
