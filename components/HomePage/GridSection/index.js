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
  aboutImageOne,
  aboutImageTwo,
  storeImage,
}) {
  const [internalLinks, setInternalLinks] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[title in [ "Kalender", "Om oss", "Händelser i butiken" ]]{
            title,
            slug,
          }`
      )
      .then((data) => setInternalLinks(data))
      .catch(console.error);
  }, []);

  const calenderLinkUrl = internalLinks[0]?.slug.current;

  const newsLink = internalLinks[1];
  const newsLinkUrl = newsLink?.slug.current;

  const aboutLink = internalLinks[2];
  const aboutLinkUrl = aboutLink?.slug.current;

  // console.log(newsLink?.slug.current);

  return (
    <GridContainer>
      <GridColumn>
        <CalendarBox>
          <h2>{calendarHeading}</h2>
          <CalendarData>
            <div>
              <li>
                <span>Event name:</span> Host
              </li>
              <li>Date: Onsdag 5/10</li>
            </div>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
          </CalendarData>
          {/* <a href={calendarPageUrl}>{calendarPageLinkText}</a> */}
          <Link href={calenderLinkUrl == undefined ? '#' : calenderLinkUrl}>
            <a>{calendarPageLinkText}</a>
          </Link>
        </CalendarBox>
        <LinkBlock>
          <Link href={newsLinkUrl == undefined ? '#' : newsLinkUrl}>
            <a>{newsLink?.title}</a>
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
            <Link href={aboutLinkUrl == undefined ? '#' : aboutLinkUrl}>
              <a>{aboutLink?.title}</a>
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

  storeImage: propTypes.string,
};
