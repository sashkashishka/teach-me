import React from 'react';
import { Heading } from 'rebass';

import Page from 'Components/page';
import Container from 'Components/container';


export default (props) => (
  <Page
    {...props}
    headerVariant="light"
  >
    <Container>
      <Heading
        as="h1"
        variant="h1"
        textAlign="center"
      >
        Page not found
      </Heading>
    </Container>
  </Page>
);
