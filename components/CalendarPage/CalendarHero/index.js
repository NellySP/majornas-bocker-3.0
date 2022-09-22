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
        <div class='calendarTitle'>
          <h1>{calendarHeading}</h1>
          <p>{calendarText}</p>
        </div>
        <div class='calendarRsvp'>
          <div class='rsvpBorder'>
            <div>
              <h2>{attendanceHeading}</h2>
              <p>{attendanceText}</p>
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
