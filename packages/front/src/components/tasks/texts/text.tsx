import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
} from 'rebass';

import pencil from 'Img/pencil.png';

import Test from './test';

const TextTask = ({ text, tests }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <Box
      maxWidth="650px"
      mx="auto"
    >
      <Text
        fontSize={{
          lg: '48px',
        }}
        lineHeight={{
          lg: '52px',
        }}
        mb={4}
        sx={{
          cursor: `url(${pencil}), auto`,
        }}
      >
        {text}
      </Text>

      <Button
        type="button"
        onClick={() => toggleOpen(!isOpen)}
        display="block"
        mx="auto"
        mb={isOpen ? 0 : 4}
        sx={{
          overflow: 'hidden',
          transition: 'max-height 0.5s, padding 0.5s, margin 0.5s',
          maxHeight: isOpen ? 0 : '100vh',
          py: isOpen ? 0 : '14px',
        }}
      >
        Далі
      </Button>

      <Box
        sx={{
          transition: 'opacity 1.5s',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {
          tests.map((test, i) => (
            <Test
              key={i}
              {...test}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default TextTask;
