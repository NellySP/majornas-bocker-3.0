import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

export const FooterContainer = styled.footer`
  font-family: var(--azeret-mono);
  font-weight: 300;
  // bottom: 0;
  // height: 358px;
  width: 100%;
  font-size: var(--p-footer-mobile);

  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid var(--dark-gray);
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  @media ${device.laptop} {
    padding-bottom: 4rem;
  }
`;

export const FooterItem = styled.div`
  width: fit-content;
  margin-top: 3rem;
`;

export const FooterHeading = styled.h3`
  font-size: var(--h3-mobile);
  font-weight: 500;
  letter-spacing: -1px;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    font-size: var(--h3-tablet);
  }
  @media ${device.laptop} {
    font-size: var(--h3-desktop);
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  @media ${device.tablet} {
    font-size: var(--p-footer-tablet);
  }

  @media ${device.laptop} {
    font-size: var(--p-desktop);
  }
`;

export const FooterListItems = styled.div`
  width: 100%;
`;

export const FooterListItem = styled.li`
  margin-top: 0.7rem;

  a {
    text-decoration: underline;
  }
  a:hover {
    font-style: italic;
  }
`;
