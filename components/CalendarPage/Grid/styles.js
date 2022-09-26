import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const CalendarWrapper = styled.div`
  /* mobile first */
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

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--azeret-mono);
  padding: 1.5rem 0 1rem 0;

  h3 {
    font-size: var(--h3-mobile);
    font-weight: 500;
    margin: 0;
  }

  p {
    font-weight: 300;
  }

  @media ${device.tablet} {
    padding: 1.5rem 0 1rem 0;

    h3 {
      font-size: var(--h3-tablet);
      font-weight: 500;
      margin: 0;
    }

    p {
      font-size: var(--p-footer-mobile);
      font-weight: 300;
      margin: 0;
    }
  }

  @media ${device.laptop} {
    padding: 2rem 0 1.5rem 0;

    h3 {
      font-size: var(--h3-desktop);
      font-weight: 500;
      margin: 0;
    }

    p {
      font-size: var(--p-large-desktop);
      font-weight: 300;
    }
  }
`;

export const PostDescription = styled.p`
  padding-bottom: 2rem;
`;

export const PostLink = styled.p`
  a {
    color: black;
    font-size: var(--small-link-desktop);
    text-decoration: underline;
    font-weight: 200;
    z-index: 3;

    &:hover {
      font-style: italic;
      font-weight: 400;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  z-index: -1;
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
  object-fit: cover;
  /* z-index: -1; */
  /* min-width: 343px; */
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

export const PostDate = styled.div`
  min-width: 80px;
  min-height: 76px;

  width: 10%;
  height: 10%;

  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;

  p {
    color: white;
    margin: 0;
    font-family: var(--azeret-mono);
    font-size: 0.75rem;
    font-weight: 200;
  }
  .day {
    font-size: var(--h2-mobile);
  }

  @media ${device.tablet} {
    width: 114px;
    height: 120px;

    p {
      font-size: 1rem;
      font-weight: 200;
    }
    .day {
      font-size: 2.5rem;
    }
  }

  @media ${device.laptop} {
    width: 124px;
    height: 130px;
    gap: 0.25rem;

    p {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    .day {
      font-size: 2.5rem;
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
