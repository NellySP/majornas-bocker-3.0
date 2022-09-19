import React, {useState,useEffect} from 'react';
import { urlFor } from '../../../lib/sanity';
import { sanityClient } from '../../../lib/sanity';
import propTypes from 'prop-types';
import {CalendarWrapper,ImgWrapper,SinglePost, PostHeading, PostDescription, PostDate, PostLink, PostImg} from './styles';



export default function CalendarPosts() {
  const [grid, setGrid] = useState([]); 

  useEffect(()=>{
    sanityClient 
    .fetch(
      `*[_type == 'calendarPage'][0]{
        pageBuilder[]{
          image,
          heading, 
          date,
          text, 
          link
        }
      }`
    )

  .then((data) => setGrid(data))
  .catch(console.error);
  },[]);

const calendarPosts = grid.pageBuilder; 

    return (
<CalendarWrapper>
{calendarPosts &&
  calendarPosts.slice(1).map((calendarPost)=>(
    <SinglePost key={calendarPost._id}>
  <ImgWrapper>
    <PostImg src={urlFor(calendarPost.image.asset._ref).url()}/>
  </ImgWrapper>
    <PostHeading>{calendarPost.heading}</PostHeading>
    <PostDate>{calendarPost.date}</PostDate>
    <PostDescription>{calendarPost.text}</PostDescription>
    <PostLink><a href="mailto:{calendarPost.link}">Anmäl dig här!</a></PostLink>
    </SinglePost>

  ))
}
</CalendarWrapper>
   /*  <HeroContainer>
        <HeroContent>
        <h1>{calendarHeading}</h1>
        <p>{calendarText}</p>
        <h2>{attendanceHeading}</h2>
        <p>{attendanceText}</p> 
        </HeroContent>
    </HeroContainer> */
    )
}
