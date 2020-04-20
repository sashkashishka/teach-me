import React from 'react';
import PropTypes from 'prop-types';

import Container from 'Components/container';
import Slider from 'Components/slider';

import TextTask from './text';

const Texts = ({ data }) => (
  <Container
    display="flex"
    alignItems="center"
    minHeight="calc(100vh - 100px - 160px)"
    py={5}
  >
    <Slider>
      {data.map((task, i) => (
        <TextTask
          key={i}
          {...task}
        />
      ))}
    </Slider>
  </Container>
);


Texts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      tests: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string,
          answers: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string,
              correct: PropTypes.bool,
            }),
          ),
        }),
      ),
    }),
  ).isRequired,
};

export default Texts;
