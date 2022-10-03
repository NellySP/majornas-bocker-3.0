import React from 'react';
import propTypes from 'prop-types';
import { HeroContainer, HeroContent } from './styles';

export default function NewsHero({
  newsHeading,
  newsText,
  noticeHeading,
  noticeText,
}) {
  return (
    <HeroContainer>
      <HeroContent>
        <div className='newsMain'>
          <h1>{newsHeading}</h1>
          <p>{newsText}</p>
        </div>
        <div className='openingHours'>
          <div className='rsvpBorder'>
            <div>
              <h2>{noticeHeading}</h2>
              {noticeText.map((paragraph) => {
                const link = paragraph.markDefs[0];

                if (link) {
                  return (
                    <p className='noticeTextLink' key={paragraph._id}>
                      <a href={link.href} target='_blank' rel='noreferrer'>
                        {paragraph.children[0].text}
                      </a>
                    </p>
                  );
                } else {
                  return (
                    <p className='noticeText' key={paragraph._id}>
                      {paragraph.children[0].text}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
}

NewsHero.propTypes = {
  newsHeading: propTypes.string,
  newsText: propTypes.string,
  noticeHeading: propTypes.string,
  noticeText: propTypes.string,
};
