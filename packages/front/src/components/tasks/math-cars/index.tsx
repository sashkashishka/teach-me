import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Flex } from 'rebass';
import { Transition, animated } from 'react-spring/renderprops';

import Container from 'Components/container';

const MathCars = ({ data }) => {
  const [currImg, setCurrImg] = useState(0);

  const images = data.map(src => style => (
    <animated.div
      style={style}
    >
      <Image
        src={src}
        alt="math car"
        display="block"
        flexShrink={0}
        minWidth="300px"
        width="auto"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          userSelect: 'none',
          mb: 0,
        }}
      />
    </animated.div>
  ));

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 100px - 160px)"
      py={5}
    >
      <Flex
        onClick={() => setCurrImg(currImg + 1 === data.length ? 0 : currImg + 1)}
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="250px"
      >
        <Transition
          items={currImg}
          from={{ transform: 'translate(-100vw, 0) rotate(-10deg)' }}
          enter={{ transform: 'translate(0, 0) rotate(0deg)' }}
          leave={{ transform: 'translate(150vw, 0) rotate(-10deg)' }}
          config={{
            easing: x => 1 - (1 - x) ** 4,
            tension: 80,
          }}
        >
          {
            item => images[item]
          }
        </Transition>
      </Flex>
    </Container>
  );
};


MathCars.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default MathCars;
