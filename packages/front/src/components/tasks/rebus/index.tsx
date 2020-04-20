import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';

import Container from 'Components/container';
import Slider from 'Components/slider';

const Rebus = ({ data }) => (
  <Container
    display="flex"
    alignItems="center"
    minHeight="calc(100vh - 100px - 160px)"
    py={5}
  >
    <Slider>
      {data.map((imgSrc, i) => (
        <Image
          key={i}
          src={imgSrc}
          alt="rebus"
          display="block"
          width="100vw"
          height="auto"
          mb={4}
          sx={{
            boxShadow: 'medium',
          }}
        />
      ))}
    </Slider>
  </Container>
);


Rebus.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Rebus;
