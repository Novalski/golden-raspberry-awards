import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      padding={5}
      bg="blue.500"
      color="white"
      w="100vw"
      pos="sticky"
    >
      <Flex align="center" mr={5}>
        <Heading as="h2" size="lg" letterSpacing="tighter">
          {process.env.REACT_APP_TITLE}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
