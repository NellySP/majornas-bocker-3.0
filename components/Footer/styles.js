import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const FooterContainer = styled.footer`
  font-family: var(--azeret-mono);
  font-weight: 300;
  bottom: 0;
  height: 358px;
  width: 100%;
  font-size: 16px;

  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid var(--dark-gray);
  justify-content: center;
  // align-items: center;
  
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

`;

export const FooterItem = styled.div`
  width: fit-content;
  margin-top: 3rem;
`;

export const FooterHeading = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin-bottom: 2rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItems = styled.div`
  width: 100%;
  `;
  
export const FooterListItem = styled.li`
  margin-top: 0.7rem;  
  
`;

export const FooterListItemLink = styled.a`
  text-decoration: underline;
`;