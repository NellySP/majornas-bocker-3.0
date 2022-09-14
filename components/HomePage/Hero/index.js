import React from 'react';
import { urlFor } from '../../../lib/sanity';
import {
  HeroContainer,
  HeroContent,
  HeroImageWrapper,
  HeroImage,
} from './styles';
import propTypes from 'prop-types';

export default function Hero({
  heading,
  description,
  linkText,
  linkUrl,
  heroImage,
}) {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>{heading}</h1>
        <p>{description}</p>
        <a href={linkUrl}>{linkText}</a>
      </HeroContent>
      <HeroImageWrapper>
        <HeroImage src={urlFor(heroImage).url()} />
      </HeroImageWrapper>
    </HeroContainer>
  );
}

Hero.propTypes = {
  heading: propTypes.string,
  description: propTypes.string,
  linkText: propTypes.string,
  linkUrl: propTypes.string,
  heroImage: propTypes.object,
};
