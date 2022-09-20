import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles';
import { device } from '../../../styles/mediaQueries';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;
  position: fixed;
  top: 2.625rem;
  left: 1rem;
  right: 1rem;
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
  background-color: transparent;
  color: var(--black);
  font-size: var(--small-link-desktop);
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  @media ${device.laptopL} {
    display: none;
  }
`;

export const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  height: 100vh;
  width: 401px;
  background-color: var(--gray);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  /* transform: translateX(0); */
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%) ')};

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

export const MobileNavContainer = styled.div`
  width: 404px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${device.laptopL} {
    display: none;
  }
`;
