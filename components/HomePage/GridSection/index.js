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
  StoreImageWrapper,
  StoreImage,
} from './styles';
import { urlFor } from '../../../lib/sanity';

export default function GridSection({
  calendarHeading,
  calendarPageLinkText,
  calendarPageUrl,
  storeImage,
}) {
  const [internalLinks, setInternalLinks] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[title in [ "Om oss","Händelser i butiken"]]{
            title,
            slug,
          }`
      )
      .then((data) => setInternalLinks(data))
      .catch(console.error);
  }, []);

  const newsLink = internalLinks[0];
  const newsLinkUrl = newsLink?.slug.current;
  console.log(newsLink?.slug.current);

  return (
    <GridContainer>
      <GridColumn>
        <CalendarBox>
          <h2>{calendarHeading}</h2>
          <CalendarData>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
          </CalendarData>
          <a href={calendarPageUrl}>{calendarPageLinkText}</a>
        </CalendarBox>
        <LinkBlock>
          <Link href={newsLinkUrl == undefined ? '#' : newsLinkUrl}>
            <a>{newsLink?.title}</a>
          </Link>
        </LinkBlock>
      </GridColumn>

      <GridColumn>
        <CalendarBox>
          <h2>{calendarHeading}</h2>
          <CalendarData>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
            <div>
              <li>Event name: Host</li>
              <li>Date: Onsdag 5/10</li>
            </div>
          </CalendarData>
          <a href={calendarPageUrl}>{calendarPageLinkText}</a>
        </CalendarBox>
        <StoreImageWrapper>
          <StoreImage src={urlFor(storeImage).url()} />
        </StoreImageWrapper>
      </GridColumn>
    </GridContainer>
  );
}

GridSection.propTypes = {
  calendarHeading: propTypes.string,
  calendarPageLinkText: propTypes.string,
  calendarPageUrl: propTypes.string,

  storeImage: propTypes.object,
};
