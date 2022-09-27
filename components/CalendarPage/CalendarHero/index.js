import React from 'react';
import propTypes from 'prop-types';
import { HeroContainer, HeroContent } from './styles';

export default function CalendarHero({
  calendarHeading,
  calendarText,
  attendanceHeading,
  attendanceText,
}) {

  return (
    <HeroContainer>
      <HeroContent>
        <div className='calendarTitle'>
          <h1>{calendarHeading}</h1>
          <p>{calendarText}</p>
        </div>
        <div className='calendarRsvp'>
          <div className='rsvpBorder'>
            <div>
              <h2>{attendanceHeading}</h2>
              {attendanceText.map((paragraph) => {
                const link = paragraph.markDefs[0];

                if (link) {
                  return (
                    <p className="attendanceTextLink" key={paragraph._id}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                      {paragraph.children[0].text}
                      </a>
                    </p>
                  )
                }
                else {
                  return (
                    <p className="attendanceText" key={paragraph._id}>
                      {paragraph.children[0].text}
                    </p>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
}

CalendarHero.propTypes = {
  calendarHeading: propTypes.string,
  calendarText: propTypes.string,
  attendanceHeading: propTypes.string,
  attendanceText: propTypes.string,
};
