import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { Flex, Box } from 'rebass';
import Helmet from 'react-helmet';


import Header from 'Components/header';
import Footer from 'Components/footer';

import theme from 'Constants/theme';

const Page = ({
  children,
  title,
  description,
  canonical,
  noindex,
  headerVariant,
  ...rest
}) => (
  <Fragment>
    <Global
      styles={css`
          body {
            padding: 0;
            margin: 0;
            color: ${theme.colors.basic[4]};
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.body};
            line-height: ${theme.lineHeights.body};
            min-width: 320px;
          }
          
          html, body, #___gatsby {
            height: 100%;
          }
          
          div[role="group"][tabindex] {
            height: 100%;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          #gatsby-noscript {
            width: 100%;
            padding: 4px 0;
            display: block;
            background-color: #fff88d;
            text-align: center;
            position: fixed;
            bottom: 0;
            font-size: 0.875rem;
            z-index: 9999;
          }
        `}
    />

    <Helmet>
      <html lang="ua" />
      <title>
        {title}
      </title>
    </Helmet>

    <Flex
      flexDirection="column"
      height="100%"
      minHeight="100vh"
    >
      <Header
        variant={headerVariant}
      />

      <Box
        flexGrow={1}
        flexShrink={1}
        flexBasis="auto"
        width="100%"
        {...rest}
      >
        {children}
      </Box>

      <Footer />
    </Flex>
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
  headerVariant: PropTypes.string,
};

Page.defaultProps = {
  canonical: '',
  noindex: false,
  headerVariant: 'dark',
};

export default Page;
