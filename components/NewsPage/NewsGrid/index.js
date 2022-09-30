import React, { useState, useEffect } from 'react';
import { urlFor } from '../../../lib/sanity';
import { sanityClient } from '../../../lib/sanity';

import {
  NewsWrapper,
  ImgWrapper,
  SinglePost,
  PostHeading,
  PostDescription,
  PostLink,
  PostImg,
  LoaderContainer,
  LoaderButton,
  LoaderText,
} from './styles';

export default function NewsPosts() {
  const [grid, setGrid] = useState([]);
  const [numberOfPosts, setNumberOfPosts] = useState(5);

  function handleLoader() {
    setNumberOfPosts((previousPostNumber) => previousPostNumber + 4); // 6 is the number of posts you want to load per click
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'newsPage'][0]{
                pageBuilder[]{
                    heading,
                    image,
                    link,
                    text
                }
            }`
      )
      .then((data) => setGrid(data))
      .catch(console.error);
  }, []);

  const newsPosts = grid.pageBuilder;

  return (
    <>
      <NewsWrapper>
        {newsPosts &&
          newsPosts.slice(0, numberOfPosts).map((newsPost) => (
            <SinglePost key={newsPost._id}>
              <ImgWrapper>
                <PostImg src={urlFor(newsPost.image.asset._ref).url()} />
              </ImgWrapper>
              <PostHeading>{newsPost.heading}</PostHeading>
              <PostDescription>{newsPost.text}</PostDescription>
              <PostLink>
                <a href={`mailto:${newsPost.link}`}>Intresseanmälan här!</a>
              </PostLink>
            </SinglePost>
          ))}
      </NewsWrapper>
      <LoaderContainer>
        {newsPosts == undefined ? (
          ''
        ) : newsPosts && numberOfPosts < newsPosts.length ? (
          <LoaderButton onClick={handleLoader}>
            Ladda fler evenemang
          </LoaderButton>
        ) : (
          <LoaderText></LoaderText>
        )}
      </LoaderContainer>
    </>
  );
}
