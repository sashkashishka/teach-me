import React from 'react';
import {
  Box,
  Image,
} from 'rebass';

import Link from 'Components/link';
import Container from 'Components/container';
import { Desktop, Mobile } from 'Components/menu';

import logo from 'Img/logo.png';

const Header = () => (
  <Box
    as="header"
    bg="primary"
    sx={{
      boxShadow: 'small',
    }}
  >
    <Container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="100px"
    >
      <Link
        href="/"
        variant="footerLink"
      >
        <Image
          src={logo}
          alt="logo teme"
          display="block"
          height="80px"
        />
      </Link>

      <Desktop />
      <Mobile />
    </Container>
  </Box>
);

export default Header;
