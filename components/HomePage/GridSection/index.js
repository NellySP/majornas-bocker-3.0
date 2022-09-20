import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { sanityClient } from '../../../lib/sanity';
import propTypes from 'prop-types';
import {
  GridContainer,
  GridColumn,
  CalendarBox,
  CalendarData,
  LinkBlock,
  AboutContainer,
  AboutImageWrapper,
  AboutLinkBlock,
  StoreImageWrapper,
  StoreImage,
} from './styles';

export default function GridSection({
  calendarHeading,
  calendarPageLinkText,
  calendarPageUrl,
  aboutImageOne,
  aboutImageTwo,
  aboutPageLinkText,
  aboutPageUrl,
  newsPageLinkText,
  newsPageUrl,
  storeImage,
}) {
  const [calendarPosts, setCalendarPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'calendarPage'][0]{
          pageBuilder[1..5]{
            heading,
            date,
          }
         }`
      )
      .then((data) => setCalendarPosts(data))
      .catch(console.error);
  }, []);

  console.log(calendarPosts.pageBuilder);
  const singlePosts = calendarPosts.pageBuilder;

  return (
    <GridContainer>
      <GridColumn>
        <CalendarBox>
          <h2>{calendarHeading}</h2>
          <CalendarData>
            {singlePosts == undefined
              ? 'No posts'
              : singlePosts &&
                singlePosts.map((posts) => (
                  <div>
                    <li>
                      <span>Event</span>: {posts.heading}
                    </li>
                    <li>
                      <span>Datum</span>: {posts.date}
                    </li>
                  </div>
                ))}
          </CalendarData>
          <Link href={calendarPageUrl == undefined ? '#' : calendarPageUrl}>
            <a>{calendarPageLinkText}</a>
          </Link>
        </CalendarBox>
        <LinkBlock>
          <Link href={newsPageUrl == undefined ? '#' : newsPageUrl}>
            <a>{newsPageLinkText}</a>
          </Link>
        </LinkBlock>
      </GridColumn>

      <GridColumn>
        <AboutContainer>
          <AboutImageWrapper>
            <img className='imageOne' src={aboutImageOne} />
            <div className='imageTwoWrapper'>
              <img className='imageTwo' src={aboutImageTwo} />
            </div>
          </AboutImageWrapper>
          <AboutLinkBlock>
            <Link href={aboutPageUrl == undefined ? '#' : aboutPageUrl}>
              <a>{aboutPageLinkText}</a>
            </Link>
          </AboutLinkBlock>
        </AboutContainer>
        <StoreImageWrapper>
          <StoreImage src={storeImage} />
        </StoreImageWrapper>
      </GridColumn>
    </GridContainer>
  );
}

GridSection.propTypes = {
  calendarHeading: propTypes.string,
  calendarPageLinkText: propTypes.string,
  calendarPageUrl: propTypes.string,

  aboutImageOne: propTypes.string,
  aboutImageTwo: propTypes.string,
  aboutPageLinkText: propTypes.string,
  aboutPageUrl: propTypes.string,

  newsPageLinkText: propTypes.string,
  newsPageUrl: propTypes.string,
  storeImage: propTypes.string,
};
