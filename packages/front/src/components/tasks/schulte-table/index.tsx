import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Container from 'Components/container';
import Td from './td';

/**
 * @see https://drafterleo.github.io/schulte/
 */
const Race = ({ data }) => {
  const [nextN, setNextN] = useState(1);

  return (
    <Container
      fontFamily="table"
      py={4}
      sx={{
        overflowX: 'scroll',

        '& table': {
          mx: 'auto',
          borderCollapse: 'collapse',
          fontSize: '24px',
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
        <tbody>
          {
            data.map((row, i) => (
              <tr
                key={i}
              >
                {
                  row.map(n => (
                    <Td
                      key={n}
                      setNextN={setNextN}
                      n={n}
                      nextN={nextN}
                    >
                      {n}
                    </Td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
};


Race.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

export default Race;
