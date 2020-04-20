import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Flex } from 'rebass';
import { Transition, animated } from 'react-spring/renderprops';

import Container from 'Components/container';

import { getRandomInt } from 'Utils';

const Ticker = ({ data }) => {
  const [currW, setCurrW] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrW(currW + 1 === data.length ? 0 : currW + 1);
    }, getRandomInt(4000, 5000));

    return () => clearTimeout(timeoutId);
  });

  const words = data.map(w => style => (
    <animated.div
      style={style}
    >
      <Text
        fontSize="32px"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          userSelect: 'none',
          mb: 0,
        }}
      >
        {w}
      </Text>
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
        alignItems="center"
        justifyContent="center"
        width={{
          _: '300px',
          md: '730px',
        }}
        height="150px"
        sx={{
          overflow: 'hidden',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary',
          borderRadius: 'medium',
        }}
      >
        <Transition
          items={currW}
          from={{ transform: 'translate(-100vw, 0)' }}
          enter={{ transform: 'translate(0, 0)' }}
          leave={{ transform: 'translate(150vw, 0)' }}
          config={{
            tension: 30,
          }}
        >
          {
            item => words[item]
          }
        </Transition>
      </Flex>
    </Container>
  );
};


Ticker.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Ticker;
