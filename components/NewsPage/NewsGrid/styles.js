import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;

  p {
    font-size: var(--p-mobile);
    margin: 0;
    line-height: 29px;
  }

  /* switch to grid in tablet */
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3.125rem;
    grid-row-gap: 4.5rem;

    p {
      font-size: var(--p-tablet);
      margin: 0;
    }
  }

  @media ${device.laptop} {
    grid-column-gap: 4.5rem;
    grid-row-gap: 5rem;
    p {
      font-size: var(--p-large-desktop);
      margin: 0;
    }
  }
`;

export const SinglePost = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostHeading = styled.h3`
  font-family: var(--azeret-mono);
  font-size: var(--h3-mobile);
  font-weight: 500;
  margin: 0;
  padding: 1.5rem 0 1rem 0;

  @media ${device.tablet} {
    font-size: var(--h3-tablet);
  }

  @media ${device.laptop} {
    font-size: var(--h3-desktop);
    padding: 2rem 0 1.5rem 0;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  min-width: 343px;
  min-height: 329px;
  width: 100%;
  height: 329px;

  @media ${device.tablet} {
    height: 191px;
  }

  @media ${device.laptopL} {
    height: 511px;
  }
`;

export const PostImg = styled.img`
  object-fit: fill;
  width: 100%;
`;

export const PostDescription = styled.p`
  padding-bottom: 2rem;
`;

export const PostLink = styled.p`
  a {
    color: black;
    font-size: var(--small-link-desktop);
    text-decoration: underline;
    text-underline-offset: 0.13rem;
    font-weight: 200;

    &:hover {
      font-style: italic;
      font-weight: 400;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;

  @media ${device.tablet} {
    padding: 7rem 0 7.5rem 0;
  }

  @media ${device.laptopL} {
  }
`;

export const LoaderButton = styled.a`
  border: none;
  cursor: pointer;
  font-size: var(--big-link-mobile);
  color: var(--black);
  text-decoration: underline;
  text-underline-offset: 0.13rem;
  font-weight: 500;
  background-color: transparent;

  &:hover {
    font-style: italic;
    font-weight: 500;
  }

  @media ${device.tablet} {
    font-size: var(--p-tablet);
  }

  @media ${device.laptopL} {
    font-size: var(--big-link-desktop);
  }
`;

export const LoaderText = styled.a`
  font-size: var(--big-link-mobile);
  color: var(--black);
  font-weight: 300;

  @media ${device.tablet} {
    font-size: var(--big-link-desktop);
  }

  @media ${device.laptopL} {
    font-size: var(--p-tablet);
  }
`;
