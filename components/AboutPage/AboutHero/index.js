import React from 'react';
import { urlFor } from '../../../lib/sanity';
import propTypes from 'prop-types';
import { HeroContainer, HeroContent } from './styles';

export default function CalendarHero ({
    aboutHeading,
    aboutText, 
    aboutImage,
    openingHoursHeading,
    openingHoursText,
}) {

    return (
        <HeroContainer>
            <HeroContent>
            <div>
                <h1 className="aboutHeading">{aboutHeading}</h1>
                <p>{aboutText}</p>
            </div>
            <div>
                <img src={urlFor(aboutImage).url()} />
                <div className="openingHoursBorder">
                    <h2>{openingHoursHeading}</h2>
                    {openingHoursText &&
                    openingHoursText.map((hours) => (
                      <div className="loop-container" key={hours._key}>
                        <p>{hours}</p>
                      </div>
                    ))}
                </div>
            </div>
            </HeroContent>
        </HeroContainer>

        // <StyledAboutUs>
        //     <HeroContent>
        //    <div class="aboutTitle">
        //     <h1>{aboutHeading}</h1>
        //     <p>{aboutText}</p>
        // </div>
        // <div class="openingHours">
        //     <img src={aboutImage}/>
        //     <div class="openingHoursBorder">
        //     <h2>{openingHoursHeading}</h2>
        //     <p>{openingHoursText}</p> 
        //     </div>
        //     </div>
        //     </HeroContent>
        //     </StyledAboutUs>

        )
    }
    
    CalendarHero.propTypes = {
        aboutHeading: propTypes.string, 
        aboutText: propTypes.string, 
        aboutImage: propTypes.string,
        openingHoursHeading: propTypes.string,
        openingHoursText: propTypes.string,
    };