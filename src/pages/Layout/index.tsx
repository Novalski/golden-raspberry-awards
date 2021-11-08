import React from 'react';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Routes from '../../routes';

const Layout: React.FC = () => {
  const showMenu = useBreakpointValue({
    md: false,
    lg: true,
  });

  return (
    <Flex h="100vh" w="100vw" flexDir="column">
      <Header />
      <Flex h="100%" w="full" right="0">
        {showMenu && <SideMenu />}
        <Flex w="full" alignSelf="stretch">
          <Routes />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
