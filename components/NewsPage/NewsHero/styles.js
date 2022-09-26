import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const HeroContainer = styled.div`
  margin: 7.875rem 0 4rem 0;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6.5rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--black);

  p {
    line-height: 29px;
    margin: 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

  .newsMain {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    h1 {
      font-size: var(--h1-mobile);
      margin: 0;
      line-height: 62px;
    }
  }

  .openingHours {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 95%;
  }

  .rsvpBorder {
    border-left: 30px solid var(--green);

    div {
      padding: 3rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h2,
    p {
      font-size: var(--h2-mobile);
      letter-spacing: normal;
      margin: 0;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 5.625rem;

    h1 {
      font-size: var(--h1-tablet);
      line-height: 72px;
      margin-bottom: 2rem;
      width: 100%;
    }

    .newsMain {
      gap: 2rem;
    }

    .openingHours {
      width: 70%;

      .rsvpBorder {
        div {
          padding: 1.5rem 2rem;
        }
      }
    }
  }

  @media ${device.laptopL} {
    justify-content: center;

    .newsMain {
      width: 60%;
      gap: 3.375rem;

      h1 {
        font-size: var(--h1-desktop);
        line-height: 90px;
        width: 75%;
      }

      p {
        width: 75%;
      }
    }

    .openingHours {
      width: 40%;

      .rsvpBorder {
        div {
          padding: 2.5rem;

          p {
            font-size: var(--p-large-desktop);
          }
        }
      }
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
