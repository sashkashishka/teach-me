import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

/**
 * @example
 *   import { Svg } from 'path/to/this/component';
 *   import ReactSvgComponent from 'path/to/react-svg-component.inline.svg';
 *
 *   <Svg
 *      as={ReactSvgComponent}
 *      fill="red"
 *   />
 *
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/
 * @param {ReactNode} as
 * @param {object} props
 * @returns {ReactNode}
 */
const Svg = ({ as, ...props }) => (
  <Box
    as={as}
    {...props}
  />
);

Svg.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Svg.defaultProps = {
  as: 'svg',
};

export default Svg;
