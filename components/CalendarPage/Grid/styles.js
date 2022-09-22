import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const CalendarWrapper = styled.div`
  /* mobile first so column? else put below in media etc */
  display: flex;
  flex-direction: column;

  /* switch to grid in tablet */
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    margin-top: 3.3rem;
  }

  @media ${device.laptop} {
    /* padding-top: 1.5rem;
    flex: 1; */
  }
`;

export const ImgWrapper = styled.div``;

export const ImgFrame = styled.div`
  width: 570px;
  height: 511px;
  overflow: hidden;
`;

export const SinglePost = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostImg = styled.img`
  /* object-fit: fill; */
  width: 100%;
`;

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--azeret-mono);
  margin: 1%;

  h3 {
    font-size: var(--h3-desktop);
    font-weight: 500;
  }
`;

export const PostDate = styled.div`
  width: 124px;
  height: 130px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
  transform: translateY(-130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    margin: 0;
    font-family: var(--azeret-mono);
    font-weight: 200;
  }
  p:nth-child(2) {
    font-size: 2rem;
  }
`;

export const PostDescription = styled.p``;

export const PostLink = styled.p`
  a {
    color: black;
    font-size: var(--small-link-desktop);
    text-decoration: underline;
    font-weight: 200;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

export const LoaderButton = styled.a`
  border: none;
  cursor: pointer;
  font-size: var(--p-large-desktop);
  color: var(--black);
  text-decoration: underline;
  font-weight: 500;
  background-color: transparent;

  &:hover {
    font-style: italic;
    font-weight: 500;
  }
`;

export const LoaderText = styled.a`
  font-size: var(--p-large-desktop);
  color: var(--black);
  font-weight: 500;
`;
