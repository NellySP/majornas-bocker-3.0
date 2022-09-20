import React, {useState, useEffect} from "react";
import {urlFor} from '../../../lib/sanity';
import {sanityClient} from '../../../lib/sanity';

import {NewsWrapper, ImgWrapper, SinglePost, PostHeading, PostDescription, PostLink, PostImg} from './styles';

export default function NewsPosts() {
    const [grid, setGrid] = useState([]);

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
    console.log(newsPosts);

    return (
         <NewsWrapper>
             {newsPosts &&
            newsPosts.slice(1).map((newsPost) => (
                <SinglePost key={newsPost._id}>
                    <ImgWrapper>
                        <PostImg src={urlFor(newsPost.image.asset._ref).url()}/>
                    </ImgWrapper>
                    <PostHeading>{newsPost.heading}</PostHeading>
                    <PostDescription>{newsPost.text}</PostDescription>
                    <PostLink><a href="mailto:{newsPost.link}">Intresseanmälan här!</a>
                        </PostLink>
                </SinglePost>
            ))}
        </NewsWrapper>
    )

}