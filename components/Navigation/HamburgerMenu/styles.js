import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles';
import { device } from '../../../styles/mediaQueries';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  background-color: ${(nav) =>
    nav.transparent ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'};
  visibility: ${(nav) => (nav.transparent ? 'visible' : 'hidden')};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* width: 90%; */
  margin: 0 auto;
  position: relative;
  top: 2.625rem;

  @media ${device.tablet} {
    width: 87.5vw;
    left: 0;
    right: 0;
    /* margin: 0 auto; */
  }

  @media ${device.laptopL} {
    width: 80vw;
    display: none;
  }
`;

export const NavLogo = styled.a`
  font-size: var(--p-large-desktop);
  font-weight: 500;
  color: var(--black);
  text-align: left;
  width: 40%;
  z-index: 3;
`;

export const MenuTrigger = styled.a`
  position: fixed;
  top: 2.625rem;
  right: 1rem;
  display: inline-block;
  margin: 0 auto;
  z-index: 3;

  display: flex;
  justify-content: flex-end;
  color: var(--black);
  font-size: var(--small-link-desktop);
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  text-align: right;

  @media ${device.tablet} {
    /* width: 87.5vw; */
    right: 5.5vw;
  }

  @media ${device.laptopL} {
    /* width: 80vw; */
    display: none;
  }
`;

export const MenuLinks = styled.nav`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  text-align: center;
  height: 100vh;
  width: 401px;
  background-color: var(--light-gray);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  animation: opacity 1s;
  transition: transform 0.3s ease-in-out;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};

  @media ${device.laptopL} {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 70%;
    gap: 3rem;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--black);
    font-size: var(--large-link-mobile);
    font-style: normal;
    font-weight: 500;
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
`;
