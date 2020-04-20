import * as React from 'react';
import {
  Box,
  Image,
} from 'rebass';

import car1 from 'Img/cars/1.svg';
import car2 from 'Img/cars/2.svg';
import car3 from 'Img/cars/3.svg';
import car4 from 'Img/cars/4.svg';
import car5 from 'Img/cars/5.svg';
import car6 from 'Img/cars/6.svg';
import car7 from 'Img/cars/7.svg';
import car8 from 'Img/cars/8.svg';
import car9 from 'Img/cars/9.svg';

const carsImgs = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
];

function getRandomCar() {
  return Math.ceil(Math.random() * 8);
}

const Td = ({ children, ...rest }) => {
  const [showImg, setShow] = React.useState(false);

  return (
    <Box
      as="td"
      onClick={(e) => {
        e.preventDefault();
        setShow(!showImg);
      }}
      py={3}
      sx={{
        position: 'relative',
        userSelect: 'none',
      }}
      {...rest}
    >
      {
        showImg && (
          <Image
            src={carsImgs[getRandomCar()]}
            alt="car"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        )
      }
      {children}
    </Box>
  );
};


export default Td;
