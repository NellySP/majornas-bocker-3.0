import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const HeroContainer = styled.div`
  margin: 7.875rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    /* padding-top: 1.5rem;
    flex: 1; */
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6.5rem;

  p {
    line-height: 29px;
    margin: 0;
  }

  .aboutTitle {
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

    img {
      width: 10rem;
      height: 10rem;
    }

    .spinnerContainer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      #spinner {
        display: none;
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
      @media ${device.tablet} {
        #spinner {
          display: initial;
        }
      }

      @media ${device.laptop} {
        justify-content: center;
      }
    }
  }

  .openingHoursBorder {
    border-left: 30px solid var(--purple);
    padding: 3rem 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-size: var(--h2-mobile);
        letter-spacing: normal;
        margin: 0 0 1rem 0;
      }

      p {
        font-size: var(--p-large-mobile);
      }
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

    .aboutTitle {
      gap: 2rem;
    }

    .openingHours {
      width: 70%;
      justify-content: space-between;

      .openingHoursBorder {
        padding: 0.5rem 0 0.5rem 1.5rem;
        div {
          gap: 0;

          h2,
          p {
            font-size: var(--p-mobile);
          }
        }
      }
    }

    @media ${device.laptopL} {
      justify-content: space-between;

      .aboutTitle {
        width: 60%;
        gap: 3.375rem;

        h1 {
          font-size: var(--h1-desktop);
          line-height: 90px;
          width: 95%;
        }

        p {
          width: 75%;
        }
      }

      .openingHours {
        width: 25%;
        gap: 4rem;

        .openingHoursBorder {
          padding: 1.25rem 2.5rem;

          div {
            gap: 0.5rem;

            h2,
            p {
              font-size: var(--h2-desktop);
            }
          }
        }
      }

      p {
        font-size: var(--p-large-desktop);
      }
    }

    a {
      font-size: var(--p-desktop);
      color: var(--black);
      text-decoration: underline;
      text-underline-offset: 0.13rem;

      &:hover {
        font-style: italic;
        font-weight: 400;
      }
    }
  }
`;
