import React, {
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
} from 'rebass';
import Glide from 'glider-js';
import 'Static/glider.css';

const Slider = ({ children }) => {
  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef.current || !window._slider) {
      window._slider = new Glide(sliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        skipTrack: true,
        draggable: false,
        dots: '.slider-dots',
      });
    }
  }, []);

  return (
    <Box>
      <Box
        ref={sliderRef}
        sx={{
          mb: 4,

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box className="glider-track">
          {children}
        </Box>
      </Box>

      <Flex
        className="slider-dots"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          '& button': {
            width: '40px',
            height: '40px',
            borderRadius: 'large',
            fontFamily: 'body',
            fontSize: 'body',
            fontWeight: '500',
            lineHeight: 'button',
            outline: 0,
            bg: 'basic.0',
            color: 'basic.5',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'primary',
            transition: 'box-shadow 0.3s, border 0.3s, color 0.3s',
            counterIncrement: 'dotsCounter',

            '&::before': {
              content: 'counter(dotsCounter)',
              display: 'block',
              flexShrink: 0,
            },

            '&.active': {
              bg: 'primary',
            },

            '&:hover': {
              cursor: 'pointer',
              boxShadow: '0px 3px 0px rgba(0, 0, 0, 0.06)',
            },
            '&:focus': {
              borderColor: 'basic.2',
            },
            '&:active': {
              borderColor: 'basic.2',
            },
            '&:disabled:active': {
              borderColor: 'primary',
            },
            '&:disabled': {
              opacity: 0.4,
              cursor: 'not-allowed',

              '&:hover': {
                cursor: 'not-allowed',
                boxShadow: 'none',
              },
            },
          },
        }}
      />
    </Box>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
