import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';

import Container from 'Components/container';
import Slider from 'Components/slider';


const DoubleSlider = ({ data }) => (
  <Container>
    <Slider>
      {
        data.map((imgSrc, i) => (
          <Image
            key={i}
            src={imgSrc}
            alt="double"
            display="block"
            width={{
              _: '300px',
              sm: '400px',
              md: '572px',
            }}
            height={{
              _: '147px',
              sm: '196px',
              md: '280px',
            }}
          />
        ))
      }
    </Slider>
  </Container>
);

DoubleSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default DoubleSlider;
