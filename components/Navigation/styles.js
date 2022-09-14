import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles';
import { device } from '../../styles/mediaQueries';

export const NavContainer = styled.div`
  padding: 2.625rem 0;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  font-size: var(--p-large-desktop);
  font-weight: 500;
  color: var(--black);
  text-align: left;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

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
