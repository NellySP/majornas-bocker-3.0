import styled from "styled-components";
import { device } from "../../../styles/mediaQueries";



export const CalendarWrapper = styled.div `
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: center;
gap: 0;
`;

export const ImgWrapper = styled.div `
width: 570px;
height: 511px;
overflow: hidden;
`;

export const SinglePost = styled.div `
display: flex;
flex-direction:column;
`;

export const PostImg = styled.img`
object-fit: fill;

`;


export const PostHeading = styled.h3`

`;

export const PostDate = styled.p`

`;

export const PostDescription = styled.p`

`;

export const PostLink = styled.p`

`;