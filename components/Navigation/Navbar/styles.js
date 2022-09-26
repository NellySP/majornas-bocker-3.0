import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";

export const NavContainer = styled.div`
  padding: 2.625rem 0;
  justify-content: space-between;
  width: 91.46vw;
  margin: 0 auto;
  display: none;

  @media ${device.tablet} {
    width: 87.5vw;
  }

  @media ${device.laptopL} {
    width: 80vw;
    display: flex;
  }
`;

export const NavLogo = styled.a`
  font-size: var(--p-large-desktop);
  font-weight: 500;
  color: var(--black);
  text-align: left;
`;

export const NavLinkWrapperDesktop = styled.div`
  display: none;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;

    a {
      color: var(--dark-gray);
      font-size: var(--small-link-desktop);
      font-style: normal;
      font-weight: 500;

      &:hover,
      :focus {
        color: var(--black);
        text-decoration: underline;
      }
    }
  }
`;
