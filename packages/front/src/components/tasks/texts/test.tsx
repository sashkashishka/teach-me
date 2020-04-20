import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from 'rebass';

import thumbUp from 'Img/thumbs-up.svg';

const Test = ({ question, answers }) => {
  const [showSmile, setShowSmile] = useState(false);

  return (
    <Box
      mb={3}
    >
      <Text
        as="strong"
        display="block"
        fontSize={{
          lg: '32px',
        }}
        lineHeight={{
          lg: '36px',
        }}
      >
        {question}
      </Text>

      <Box>
        {
          answers.map(({ text, correct }) => (
            <Flex
              key={text}
              onClick={() => setShowSmile(correct)}
              alignItems="center"
              mb={2}
              fontSize={{
                lg: '24px',
              }}
              lineHeight={{
                lg: '32px',
              }}
            >
              <Box
                height="30px"
                width="30px"
                flexShrink={0}
                mr={2}
                sx={{
                  borderRadius: 'circle',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: 'primary',
                }}
              >
                {
                  showSmile && correct && (
                    <Image
                      src={thumbUp}
                      alt="smile"
                      display="block"
                      width="100%"
                      height="100%"
                    />
                  )
                }
              </Box>
              {text}
            </Flex>
          ))
        }
      </Box>
    </Box>
  );
};

export default Test;
