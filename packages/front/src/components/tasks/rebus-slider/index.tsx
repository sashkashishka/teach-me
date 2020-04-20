import React from 'react';
import PropTypes from 'prop-types';

import Container from 'Components/container';
import FlipCard from 'Components/flip-card';
import Slider from 'Components/slider';


const RebusCard = ({ sx, ...rest }) => (
  <FlipCard
    sx={{
      '& .flip-card': {
        width: ['300px', null, null, '450px'],
        height: ['107px', null, null, '160px'],
      },
      '& .flip-card__img': {
        borderRadius: 0,
      },
      ...sx,
    }}
    {...rest}
  />
);

const RebusSlider = ({ data }) => (
  <Container>
    <Slider>
      {
        data.map((rebus, i) => (
          <RebusCard
            key={i}
            data={rebus}
          />
        ))
      }
    </Slider>
  </Container>
);

RebusSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      front: PropTypes.string,
      back: PropTypes.string,
    }),
  ).isRequired,
};

export default RebusSlider;
