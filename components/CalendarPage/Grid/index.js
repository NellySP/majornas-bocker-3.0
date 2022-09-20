import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '../../../lib/sanity';
import { sanityClient } from '../../../lib/sanity';
// import form1 from '../../../public/images/form-1-green.svg';
import form2 from '../../../public/images/form-4-orange.svg';
import propTypes from 'prop-types';

import {
  CalendarWrapper,
  ImgWrapper,
  SinglePost,
  PostHeading,
  PostDescription,
  PostDate,
  PostLink,
  PostImg,
} from './styles';

export default function CalendarPosts() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
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
  }, []);

  const calendarPosts = grid.pageBuilder;

  const src = '/images/form-';
  const images = [
    src + '1-green.svg',
    src + '2-green.svg',
    src + '3-green.svg',
    src + '4-green.svg',
    src + '1-orange.svg',
    src + '2-orange.svg',
    src + '3-orange.svg',
    src + '4-orange.svg',
  ];

  const randomPlaceholderImage =
    images[Math.floor(Math.random() * images.length)];

  console.log(randomPlaceholderImage);

  return (
    <CalendarWrapper>
      {calendarPosts &&
        calendarPosts.slice(1).map(
          (calendarPost) => (
            console.log(calendarPost.image),
            (
              <SinglePost key={calendarPost._id}>
                <ImgWrapper>
                  {calendarPost.image &&
                    (calendarPost.image == null ? (
                      <img src={`${randomPlaceholderImage}`} />
                    ) : (
                      <PostImg
                        src={urlFor(calendarPost.image).url()}
                        alt={calendarPost.image.caption}
                      />
                    ))}
                </ImgWrapper>
                <PostHeading>{calendarPost.heading}</PostHeading>
                <PostDate>{calendarPost.date}</PostDate>
                <PostDescription>{calendarPost.text}</PostDescription>
                <PostLink>
                  <a href='mailto:{calendarPost.link}'>Anmäl dig här!</a>
                </PostLink>
              </SinglePost>
            )
          )
        )}
    </CalendarWrapper>
  );
}
