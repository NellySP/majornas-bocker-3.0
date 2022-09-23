import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '../../../lib/sanity';
import { sanityClient } from '../../../lib/sanity';

import {
  CalendarWrapper,
  ImgWrapper,
  ImgFrame,
  SinglePost,
  PostHeading,
  PostDescription,
  PostDate,
  PostLink,
  PostImg,
  LoaderContainer,
  LoaderButton,
  LoaderText,
} from './styles';

export default function CalendarPosts() {
  const [grid, setGrid] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(4);

  function handleLoader() {
    setNumberOfPosts((previousPostNumber) => previousPostNumber + 4); // 6 is the number of posts you want to load per click
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'calendarPage'][0]
        {
          pageBuilder[]{
            image,
            heading, 
            day,
            month,
            text, 
            link,
            linkText,
            time
          }
        }`
      )

      .then((data) => setGrid(data))
      .catch(console.error);
  }, []);

  const calendarPosts = grid.pageBuilder;
  console.log(calendarPosts);

  return (
    <>
      <CalendarWrapper>
        {calendarPosts == undefined
          ? ''
          : calendarPosts &&
            calendarPosts.slice(0, numberOfPosts).map((calendarPost) => (
              // console.log(calendarPost.image),
              <SinglePost key={calendarPost._id}>
                <ImgWrapper>
                  {calendarPost.image &&
                    (calendarPost.image == null ? (
                      <Image src={`${randomPlaceholderImage}`} />
                    ) : (
                      <PostImg
                        src={urlFor(calendarPost.image).url()}
                        alt={calendarPost.image.caption}
                      />
                    ))}

                  <PostDate>
                    <p className='month'>{calendarPost.month}</p>
                    <p className='day'>{calendarPost.day}</p>
                  </PostDate>
                </ImgWrapper>
                <PostHeading>
                  <h3>{calendarPost.heading}</h3>
                  <p>{calendarPost.time}</p>
                </PostHeading>
                <PostDescription>{calendarPost.text}</PostDescription>
                <PostLink>
                  <a href={`mailto:${calendarPost.link}`}>
                    {calendarPost.linkText}
                  </a>
                </PostLink>
              </SinglePost>
            ))}
      </CalendarWrapper>
      <LoaderContainer>
        {calendarPosts == undefined ? (
          ''
        ) : calendarPosts && numberOfPosts < calendarPosts.length ? (
          <LoaderButton onClick={handleLoader}>
            Ladda fler evenemang
          </LoaderButton>
        ) : (
          <LoaderText>Allt är laddat! 👍</LoaderText>
        )}
      </LoaderContainer>
    </>
  );
}
