import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import { clamp, defaultTo } from 'ramda';

import Star from 'Img/star.inline.svg';

const Rating = ({ rating, of10, ...rest }) => (
  <Text
    display="flex"
    alignItems="center"
    {...rest}
  >
    <Star />
    &nbsp;
    {`${clamp(0, 10, defaultTo(0, Number(rating)))}${of10 ? '/10' : ''}`}
  </Text>
);

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  of10: PropTypes.bool,
};

Rating.defaultProps = {
  of10: true,
};

export default Rating;
