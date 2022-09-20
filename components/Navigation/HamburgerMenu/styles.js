import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles';
import { device } from '../../../styles/mediaQueries';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* width: 90%; */
  margin: 0 auto;
  position: relative;
  top: 2.625rem;

  z-index: 2;

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
`;

export const MenuTrigger = styled.a`
  position: fixed;
  top: 2.625rem;
  right: 1rem;
  display: inline-block;
  margin: 0 auto;

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

    right: 4vw;
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
  text-align: center;
  height: 100vh;
  width: 401px;
  background-color: var(--gray);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  /* opacity: ${({ nav }) => (nav ? '1' : '0.5')}; */
  animation: opacity 1s;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};

  @media ${device.laptopL} {
    display: none;
  }

  ul {
    padding: 4rem 6rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4rem;
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
`;
