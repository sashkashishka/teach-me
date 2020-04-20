import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { Link as RebassLink } from 'rebass';

/**
 * @param {React.Props} props
 * @param {String} props.href
 * @param {String|React.Element} props.children
 * @returns {React.Element}
 */
const Link = (props) => {
  const {
    href,
    children,
    external,
  } = props;

  const additionalProps = external
    ? { href }
    : {
      to: href,
      as: GatsbyLink,
    };

  return (
    <RebassLink
      variant="link"
      {...props}
      {...additionalProps}
    >
      {children}
    </RebassLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};

GatsbyLink.defaultProps = {
  activeClassName: 'activeLink',
};

export default Link;
