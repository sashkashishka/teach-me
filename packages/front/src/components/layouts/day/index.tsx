import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'rebass';

import Container from 'Components/container';
import Link from 'Components/link';

import schedule from 'Constants/schedule';

const DayPage = ({
  daySlug,
}) => (
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
        Потренуємося!
      </Heading>
      <Box>
        {schedule[daySlug]?.tasks.map((task, i) => (
          <Box
            key={i}
          >
            <Link
              href={`/days/${daySlug}/tasks/${i + 1}`}
            >
              {`Завдання ${i + 1}`}
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

DayPage.propTypes = {
  daySlug: PropTypes.string.isRequired,
};

export default DayPage;
