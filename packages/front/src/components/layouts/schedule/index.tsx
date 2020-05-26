import * as React from 'react';
import { useParams, RouteComponentProps } from '@reach/router';
import { Box, Heading } from 'rebass';

import { useApi } from 'Hooks/useApi';

import Page from 'Components/page';
import Container from 'Components/container';
// import Link from 'Components/link';


const SchedulePage: React.FC<RouteComponentProps<{ userSlug: string; }>> = ({
  userSlug,
}) => {
  const params = useApi();

  // console.log('schedule', params);
  return (
    <Page
      title="Teach me - Розклад"
      auth
    >
      <Box>
        <Container
          textAlign="center"
          py={{
            _: 4,
            md: 5,
          }}
        >
          <Heading
            as="h1"
            variant="h1"
          >
            schedule!
            {userSlug}
          </Heading>
        </Container>
      </Box>
    </Page>
  );
};

export default SchedulePage;
