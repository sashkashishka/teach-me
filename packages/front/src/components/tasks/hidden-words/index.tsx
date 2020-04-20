import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { useSpring, animated } from 'react-spring';

import Container from 'Components/container';
import Slider from 'Components/slider';

import { generateWords } from 'Utils';

const LettersWord = ({ w }) => {
  const [isFound, toggleFound] = useState(false);
  const [{ before, after }] = useState(generateWords(w, 30));
  const { x } = useSpring({ from: { x: 0 }, x: isFound ? 1 : 0, config: { duration: 1000 } });

  return (
    <Box
      py={4}
      textAlign="center"
      fontSize="32px"
    >
      {before.split('').join(' ')}
      {' '}
      <Box
        as="span"
        color={isFound ? 'primary' : 'inherit'}
        onClick={() => toggleFound(true)}
      >
        <animated.div
          style={{
            display: 'inline-block',
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [0, 50, 100, 50, -50, 100, -50, 0],
              })
              .interpolate(a => `translateY(${a}%)`),
          }}
        >
          {w.split('').join(' ')}
        </animated.div>
      </Box>
      {' '}
      {after.split('').join(' ')}
    </Box>
  );
};

const HiddenWords = ({ data }) => (
  <Container
    py={5}
  >
    <Slider>
      {
        data.map((w) => (
          <LettersWord
            key={w}
            w={w}
          />
        ))
      }
    </Slider>
  </Container>
);

HiddenWords.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default HiddenWords;
