import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const HeroContainer = styled.div`
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 1rem;
  }

  @media ${device.laptop} {
    padding-top: 1.5rem;
    flex: 1;
    gap: 1.5rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 0 0 0;

  h1 {
    font-size: var(--h1-mobile);
    margin-bottom: 1.5rem;
    line-height: 67px;
  }

  p {
    line-height: 26px;
  }

  a {
    font-size: var(--small-link-mobile);
    color: var(--black);
    text-decoration: underline;
    text-underline-offset: 0.13rem;
  }

  @media ${device.tablet} {
    margin-bottom: 3rem;
    h1 {
      /* font-size: var(--h1-tablet); */
      font-size: 6vw;
      line-height: 1;
      margin-bottom: 2rem;
      width: 100%;
    }

    p {
      margin-bottom: 2.5rem;
      line-height: 28px;
    }

    a {
      font-size: var(--p-desktop);

      &:hover {
        font-style: italic;
        font-weight: 300;
      }
    }
  }

  @media ${device.laptop} {
    position: relative;
    justify-content: center;

    h1 {
      line-height: 1;
      margin-bottom: 0;
    }

    p {
      font-size: var(--h2-desktop);
      line-height: 33px;
      width: 75%;
      margin-bottom: 4rem;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const HeroImage = styled.img`
  min-width: 216px;
  width: 60vw;

  @media ${device.tablet} {
    width: 40vw;
  }

  @media ${device.laptop} {
    width: auto;
    height: 40vw;
  }
`;
