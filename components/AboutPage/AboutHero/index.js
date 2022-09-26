import React from 'react';
import { urlFor } from '../../../lib/sanity';
import propTypes from 'prop-types';
import { HeroContainer, HeroContent } from './styles';

export default function CalendarHero({
  aboutHeading,
  aboutText,
  aboutImage,
  openingHoursHeading,
  openingHoursText,
}) {
  return (
    <HeroContainer>
      <HeroContent>
        <div className='aboutTitle'>
          <h1>{aboutHeading}</h1>
          <p>{aboutText}</p>
        </div>
        <div className='openingHours'>
          <div className='spinnerContainer'>
            <img id='spinner' src={urlFor(aboutImage).url()} />
          </div>
          <div className='openingHoursBorder'>
            <div>
              <h2>{openingHoursHeading}</h2>
              {openingHoursText &&
                openingHoursText.map((hours) => (
                  <div className='loop-container' key={hours._key}>
                    <p>{hours}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
}

CalendarHero.propTypes = {
  aboutHeading: propTypes.string,
  aboutText: propTypes.string,
  aboutImage: propTypes.string,
  openingHoursHeading: propTypes.string,
  openingHoursText: propTypes.string,
};
