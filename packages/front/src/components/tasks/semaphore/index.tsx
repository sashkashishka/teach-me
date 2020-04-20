import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import Container from 'Components/container';
// import Slider from 'Components/slider';

import { getRandomInt } from 'Utils';

const Semaphore = ({ data: { colors, delay, syllable } }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let newIndex = getRandomInt(0, colors.length - 1);

    while (newIndex === index) {
      newIndex = getRandomInt(0, colors.length - 1);
    }

    const timeoutId = setTimeout(() => {
      setIndex(newIndex);
    }, getRandomInt(...delay));

    return () => clearTimeout(timeoutId);
  });


  return (
    <Container
      display="flex"
      alignItems="center"
      minHeight="calc(100vh - 100px - 160px)"
      py={5}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        mx="auto"
        width="300px"
        height="300px"
        bg={colors[index]}
        fontSize={5}
        color="basic.0"
        sx={{
          transition: 'background-color 0.5s',
          borderRadius: 'circle',
        }}
      >
        {syllable[index]}
      </Flex>
    </Container>
  );
};


Semaphore.propTypes = {
  data: PropTypes.shape({
    colors: PropTypes.arrayOf(
      PropTypes.string,
    ),
    delay: PropTypes.arrayOf(PropTypes.number),
    syllable: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
};

export default Semaphore;
