import React from 'react';
import { urlFor } from '../../../lib/sanity';
import propTypes from 'prop-types';
import { GridContainer } from './styles';

export default function AboutGrid({
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
}) {
  return (
    <GridContainer>
      <div className='gallery'>
        <div className='firstImage'>
          <img src={urlFor(galleryImage1).url()} />
        </div>
        <div className='middle-image-container'>
          <div>
            <img src={urlFor(galleryImage2).url()} />
          </div>
          <div className='thirdImage'>
            <img src={urlFor(galleryImage3).url()} />
          </div>
        </div>
        <div className='fourthImage'>
          <img src={urlFor(galleryImage4).url()} />
        </div>
      </div>
    </GridContainer>
  );
}

AboutGrid.propTypes = {
  galleryImage1: propTypes.string,
  galleryImage2: propTypes.string,
  galleryImage3: propTypes.string,
  galleryImage4: propTypes.string,
};
