import React, { Fragment, useState } from 'react';
import {
  Box,
  Button,
} from 'rebass';
import { Global, css } from '@emotion/core';

import Link from 'Components/link';
import Svg from 'Components/svg';

import schedule from 'Constants/schedule';

import MenuIcon from './img/menu.inline.svg';
import MenuClose from './img/close.inline.svg';

const MenuLink = (props) => (
  <Link
    display="block"
    py={2}
    mx={0}
    color="basic.5"
    textAlign="center"
    {...props}
  />
);

export default ({ variant }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <Fragment>
      {
        isOpen && (
          <Global
            styles={css`
              body {
                overflow: hidden;
              }
            `}
          />
        )
      }

      <Box
        display={isOpen ? 'initial' : 'none'}
        onClick={() => toggleOpen(false)}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.2)',
        }}
      />

      <Box
        as="nav"
        display={{
          md: 'none',
        }}
        sx={{
          position: 'relative',
        }}
      >
        <Button
          aria-label="hamburger menu"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="48px"
          height="48px"
          p={0}
          onClick={() => toggleOpen(!isOpen)}
        >
          <Svg
            as={MenuIcon}
            sx={{
              fill: variant === 'dark' ? 'basic.5' : 'basic.0',
            }}
          />
        </Button>

        <Box
          width="320px"
          p={3}
          bg="basic.0"
          overflowY="scroll"
          sx={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: isOpen ? 0 : '-320px',
            transition: 'right 0.3s',
            zIndex: 1000,
          }}
        >
          <Button
            aria-label="close button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="48px"
            height="48px"
            ml="auto"
            p={0}
            onClick={() => toggleOpen(false)}
          >
            <Svg
              as={MenuClose}
              sx={{
                fill: variant === 'dark' ? 'basic.5' : 'basic.0',
              }}
            />
          </Button>

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
                <MenuLink
                  href={`/days/${i}`}
                >
                  {day}
                </MenuLink>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Fragment>
  );
};
