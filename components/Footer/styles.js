import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const FooterContainer = styled.footer`
  // position: absolute;
  bottom: 0;
  height: 358px;
  width: 100%;
  font-size: 16px;

    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 87px;
  }

`;

export const FooterItem = styled.div`
  width: 100%;
`;

export const FooterHeading = styled.h3`
  font-family: var(--azeret-mono);
  font-size: var(--h3-mobile);
  font-weight: 300;
  letter-spacing: -1px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItems = styled.div`
  width: 100%;
`;

export const FooterListItem = styled.li`
  
`;

export const FooterListItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
flex-grow: 1;
`;