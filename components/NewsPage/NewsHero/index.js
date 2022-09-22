import React from "react";
import { urlFor } from "../../../lib/sanity";
import propTypes from "prop-types";
import { HeroContainer, HeroContent } from "./styles";

export default function NewsHero({
  newsHeading,
  newsText,
  noticeHeading,
  noticeText,
}) {
  return (
    <HeroContainer>
      <HeroContent>
        <div className="newsMain">
          <h1>{newsHeading}</h1>
          <p>{newsText}</p>
        </div>
        <div className="openingHours">
          <div className="rsvpBorder">
            <h2>{noticeHeading}</h2>
            <p>{noticeText}</p>
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
