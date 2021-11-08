import React from 'react';

import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import MenuDropdown from '../MenuDropdown';

const Header: React.FC = () => {
  const showMenu = useBreakpointValue({
    lg: false,
    md: true,
    sm: true,
  });

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent={showMenu ? 'flex-start' : 'center'}
      padding={5}
      bg="blue.500"
      w="100vw"
      pos="sticky"
    >
      {showMenu && <MenuDropdown />}
      <Heading as="h2" size="lg" letterSpacing="tighter" color="white">
        {process.env.REACT_APP_TITLE}
      </Heading>
    </Flex>
  );
};

export default Header;
