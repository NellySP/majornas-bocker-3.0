import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";
export const GridContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media ${device.tablet} {
    flex-direction: row;
    padding-bottom: 7.5rem;
  }

  @media ${device.laptop} {
    padding-bottom: 11.25rem;
  }
`;

export const GridColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const CalendarBox = styled.div`
  background-color: var(--light-gray);
  padding: 1.5rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: var(--h2-mobile);
    margin: 0;
  }

  a {
    display: block;
    font-size: var(--p-desktop);
    color: var(--black);
    text-decoration: underline;
    text-underline-offset: 0.13rem;
    text-align: right;

    &:hover {
      font-style: italic;
    }
  }

  @media ${device.tablet} {
    padding: 3rem;

    h2 {
      font-size: var(--h2-tablet);
    }
  }

  @media ${device.laptop} {
    padding: 4rem;

    h2 {
      font-size: var(--h2-desktop);
    }
  }
`;

export const CalendarData = styled.div`
  padding: 1.5rem 0 2rem 0;

  li {
    font-family: var(--azeret-mono);
    list-style: none;
    margin: 2rem 0;
  }

  p {
    margin: 0;
    font-size: var(--p-footer-mobile);
    font-weight: 300;
  }

  span {
    font-weight: 500;
  }

  .date {
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    li {
      margin: 1.5rem 0;
    }
  }
  @media ${device.laptop} {
    li {
      margin: 2.5rem 0;
    }

    p {
      font-size: var(--p-large-desktop);
    }
  }
`;

export const LinkBlock = styled.div`
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  height: 100%;

  a {
    display: block;
    font-size: var(--big-link-mobile);
    color: var(--black);
    text-decoration: underline;
    text-underline-offset: 0.13rem;
    text-align: center;

    &:hover {
      font-style: italic;
    }
  }
  @media ${device.tablet} {
    a {
      font-size: var(--p-tablet);
    }
  }
  @media ${device.desktop} {
    font-size: var(--big-link-desktop);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const AboutImageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }

  .imageOne,
  .imageTwo {
    width: 100%;
    @media ${device.tablet} {
    }
    @media ${device.desktop} {
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .imageTwoWrapper {
    z-index: -1;
    background: var(--orange);

    .imageTwo {
      animation: spin 12s linear infinite reverse;
    }
  }
`;

export const AboutLinkBlock = styled.div`
  width: 50%;
  background-color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: block;
    font-size: var(--big-link-mobile);
    color: var(--black);
    text-decoration: underline;
    text-underline-offset: 0.13rem;
    text-align: right;

    &:hover {
      font-style: italic;
    }
  }
  @media ${device.tablet} {
    a {
      font-size: var(--p-tablet);
    }
  }
  @media ${device.desktop} {
    font-size: var(--big-link-desktop);
  }
`;

export const StoreImageWrapper = styled.div`
  height: 100%;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const StoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
