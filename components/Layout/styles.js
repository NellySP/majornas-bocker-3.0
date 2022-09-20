import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const MainWrapper = styled.div`
  width: 91.46vw;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 87.5vw;
    margin: 0auto;
  }

  @media ${device.laptopL} {
    width: 80vw;
  }
`;
