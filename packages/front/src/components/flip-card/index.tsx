import * as React from 'react';
import {
  Card,
  Box,
  Image,
} from 'rebass';

import Container from 'Components/container';


const BrainBoxCard = ({ data: { front, back }, sx, ...rest }) => {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <Container
      py={4}
      sx={{
        perspective: '550px',
        ...sx,
      }}
      {...rest}
    >
      <Card
        className="flip-card"
        onClick={() => setFlipped(!isFlipped)}
        p={0}
        mx="auto"
        sx={{
          position: 'relative',
          boxShadow: 'none',
          cursor: 'pointer',
        }}
      >
        <Box
          className="front"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s',
            zIndex: 2,
          }}
        >
          <Image
            className="flip-card__img"
            src={front}
            alt="front"
            display="block"
            width="100%"
            height="100%"
            sx={{
              borderRadius: 'medium',
            }}
          />
        </Box>

        <Box
          className="back"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: isFlipped ? 'rotateY(0)' : 'rotateY(-180deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s',
          }}
        >
          <Image
            className="flip-card__img"
            src={back}
            alt="back"
            display="block"
            width="100%"
            height="100%"
            sx={{
              borderRadius: 'medium',
            }}
          />
        </Box>
      </Card>
    </Container>
  );
};

BrainBoxCard.propTypes = {
  data: PropTypes.shape({
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
  }).isRequired,
  sx: PropTypes.shape({}).isRequired,
};

export default BrainBoxCard;
