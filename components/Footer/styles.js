import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const FooterContainer = styled.div`
  // position: absolute;
  bottom: 0;
  height: 358px;
  width: 100%;
  align-items: center;
  font-size: 16px;
  
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 87px;
  }

`;

export const FooterItem = styled.div`
  width: 100%
`;

export const FooterHeading = styled.h3`
  font-family: --var(azeret-mono);
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
  
`;