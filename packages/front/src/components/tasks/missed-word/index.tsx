import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

import Container from 'Components/container';

const MissedWord = ({ data }) => {
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
        fontSize={{
          lg: '128px',
        }}
        onClick={() => setWord(currWord + 1 === data.length ? 0 : currWord + 1)}
        sx={{
          cursor: 'pointer',
          userSelect: 'none',
          mb: 0,
        }}
      >
        {data[currWord]}
      </Heading>
    </Container>
  );
};


MissedWord.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default MissedWord;
