import React from 'react';
import { Box, Flex } from 'rebass';

import Link from 'Components/link';

import schedule from 'Constants/schedule';

export default () => (
  <Flex
    as="nav"
    display={{
      xs: 'none',
      md: 'initial',
    }}
    alignItems="center"
    ml="auto"
  >
    <Box
      sx={{
        position: 'relative',

        '&:hover .days': {
          display: 'block',
        },
      }}
    >
      <Box
        variant="link"
        mx={3}
        sx={{
          cursor: 'pointer',

        }}
      >
        Розклад

        <Box
          className="days"
          display="none"
          bg="basic.0"
          p={3}
          minWidth="180px"
          sx={{
            position: 'absolute',
            top: '100%',
            right: 0,
            borderRadius: 'small',
            boxShadow: 'medium',
            zIndex: 999,
          }}
        >
          {
            schedule.map(({ day }, i) => (
              <Box
                key={day}
                mb={3}
                sx={{
                  '&:last-of-type': {
                    mb: 0,
                  },
                }}
              >
                <Link
                  href={`/days/${i}`}
                >
                  {day}
                </Link>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  </Flex>
);
