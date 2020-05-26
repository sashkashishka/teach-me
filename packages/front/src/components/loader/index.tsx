import * as React from 'react';
import { Box, BoxProps } from 'rebass';
import { keyframes } from '@emotion/core';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner: React.FC<BoxProps> = ({ sx, ...rest }) => (
  <Box
    sx={{
      my: 3,
      mx: 'auto',
      fontSize: '10px',
      textIndent: '-9999em',
      border: '.25em solid rgba(0, 0, 0, .1)',
      borderLeft: '.25em solid #f89c1d',
      transform: 'translateZ(0)',
      willChange: 'rotate',
      animation: `${spinnerAnimation} 1s linear infinite`,


      '&, &::after': {
        borderRadius: '50%',
        width: '32px',
        height: '32px',
      },
      ...sx,
    }}
    {...rest}
  />
);

export default Spinner;
