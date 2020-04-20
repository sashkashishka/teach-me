import React from 'react';
import {
  Heading,
  Image,
} from 'rebass';

import Page from 'Components/page';
import Container from 'Components/container';

import rain from 'Img/rain.jpg';

import pageMeta from './page-meta';


export default (props) => (
  <Page
    {...props}
    {...pageMeta}
  >
    <Container
      py={4}
    >
      <Heading
        as="h1"
        variant="h1"
        textAlign="center"
      >
        Are you ready?
      </Heading>

      <Image
        src={rain}
        alt="dog Rain"
        display="block"
        width="100%"
        maxWidth="500px"
        mx="auto"
        sx={{
          borderRadius: 'medium',
          boxShadow: 'medium',
        }}
      />
    </Container>
  </Page>
);
