import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 0;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    flex-direction: column;
  }
`;

export const GridColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CalendarBox = styled.div`
  background-color: var(--light-gray);
  padding: 1.5rem 1rem;

  a {
    display: block;
    font-size: var(--p-desktop);
    color: var(--black);
    text-decoration: underline;
    text-align: right;

    &:hover {
      font-style: italic;
      font-weight: 400;
    }
  }

  @media ${device.tablet} {
    padding: 3rem;
  }

  @media ${device.desktop} {
  }
`;

export const CalendarData = styled.div`
  padding: 1.5rem 0 2rem 0;

  h2 {
    font-size: var(--h2-mobile);
  }

  div {
    margin-bottom: 2rem;
  }

  li {
    list-style: none;
    font-family: var(--azeret-mono);
    font-size: var(--p-footer-mobile);
    font-weight: 300;
    margin-bottom: 0.5rem;
    span {
      font-weight: 500;
    }
  }

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const LinkBlock = styled.div`
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 4.5rem;

  a {
    display: block;
    font-size: var(--p-desktop);
    color: var(--black);
    text-decoration: underline;
    text-align: right;

    &:hover {
      font-style: italic;
      font-weight: 400;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const StoreImageWrapper = styled.div`
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const StoreImage = styled.img`
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
