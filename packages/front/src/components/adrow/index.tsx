import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';

export const AdItem = props => (
  <Box
    flexGrow={1}
    flexShrink={1}
    flexBasis={{
      _: 'auto',
      md: '100%',
    }}
    order={0}
    {...props}
  />
);

export const FluidItem = props => (
  <Box
    flexGrow={1}
    flexShrink={0}
    flexBasis="auto"
    order={0}
    // we can accept `width` prop with responsive styles
    sx={{
      width: ['100%'],
    }}
    {...props}
  />
);

AdItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const AdRow = forwardRef((props, ref) => (
  <Flex
    ref={ref}
    width="100%"
    flexWrap="nowrap"
    flexDirection={{
      _: 'column',
      md: 'row',
    }}
    {...props}
  />
));

AdRow.propTypes = {
  children: PropTypes.arrayOf(AdItem).isRequired,
};

export default AdRow;
