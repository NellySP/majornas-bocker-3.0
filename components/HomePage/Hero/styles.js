import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const HeroContainer = styled.div`
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    padding-top: 1.5rem;
    flex: 1;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 0;

  h1 {
    font-size: var(--h1-mobile);
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    h1 {
      font-size: var(--h1-tablet);
      line-height: 72px;
      margin-bottom: 2rem;
      width: 100%;
    }

    p {
      margin-bottom: 2.5rem;
    }
  }

  @media ${device.laptop} {
    justify-content: center;

    h1 {
      font-size: var(--h1-desktop);
      line-height: 90px;
    }

    p {
      font-size: var(--h2-desktop);
      line-height: 113%;
      width: 75%;
      margin-bottom: 4rem;
    }
  }

  a {
    font-size: var(--p-desktop);
    color: var(--black);
    text-decoration: underline;

    &:hover {
      font-style: italic;
      font-weight: 400;
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
