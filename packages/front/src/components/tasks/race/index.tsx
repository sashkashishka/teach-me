import React from 'react';
import PropTypes from 'prop-types';

import Container from 'Components/container';
import Td from './td';

const Race = ({ data }) => (
  <Container
    fontFamily="table"
    py={4}
    sx={{
      overflowX: 'scroll',

      '& table': {
        width: '100%',
        mx: 'auto',
        borderSpacing: '16px 32px',
        fontSize: '24px',
      },

      '& th': {
        color: 'basic.5',
      },

      '& b': {
        color: 'basic.5',
      },

      '& td': {
        textAlign: 'center',
        cursor: 'pointer',
      },
    }}
  >
    <table>
      <thead>
        <tr>
          {
            data[0].map((w, i) => (
              <th
                key={`${w}${i}`}
              >
                {w}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.slice(1).map((row, i) => (
            <tr
              key={i}
            >
              {
                row.map((w, k) => {
                  if (k === 0) {
                    return (
                      <td
                        key={`${w}${k}`}
                      >
                        <b>{w}</b>
                      </td>
                    );
                  }

                  return (
                    <Td
                      key={`${w}${k}`}
                    >
                      {w}
                    </Td>
                  );
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </Container>
);


Race.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ).isRequired,
};

export default Race;
