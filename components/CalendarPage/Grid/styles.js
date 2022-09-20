import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';

export const CalendarWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 2vw;
grid-row-gap: 2vw;
margin-top: 3.3rem;
`;

export const ImgWrapper = styled.div`
`;

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
  object-fit: fill;
`;

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--azeret-mono);

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
