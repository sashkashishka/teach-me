import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import Container from 'Components/container';

const Singing = ({ data }) => {
  const [currWord, setWord] = useState(0);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 100px - 160px)"
      py={5}
    >
      <Heading
        as="h1"
        variant="h1"
        onClick={() => setWord(currWord + 1 === data.length ? 0 : currWord + 1)}
        fontSize={{
          lg: '128px',
        }}
        sx={{
          cursor: 'pointer',
          userSelect: 'none',
          mb: 0,

          '& .emphasis': {
            color: 'primary',
          },
        }}
      >
        {data[currWord].map((w, i) => (
          <span
            key={w}
            className={i === 1 ? 'emphasis' : ''}
          >
            {w}
          </span>
        ))}
      </Heading>
    </Container>
  );
};


Singing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ).isRequired,
};

export default Singing;
