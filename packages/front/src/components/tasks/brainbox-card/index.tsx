import React from 'react';

import FlipCard from 'Components/flip-card';


const BrainBoxCard = ({ sx, ...rest }) => (
  <FlipCard
    sx={{
      '& .flip-card': {
        width: ['280px', null, '400px', '500px'],
        height: ['280px', null, '400px', '500px'],
      },
      ...sx,
    }}
    {...rest}
  />
);

export default BrainBoxCard;
