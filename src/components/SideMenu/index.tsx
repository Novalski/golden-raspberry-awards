import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, VStack } from '@chakra-ui/react';

import { Routes } from '../../routes/types';

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const navigateClickHandler = useCallback(
    (route: Routes) => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <Flex
      pos="sticky"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
      w="200px"
      flexDir="column"
      p={5}
    >
      <VStack spacing={4} align="stretch">
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigateClickHandler('/')}
        >
          Dashboard
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigateClickHandler('/list')}
        >
          List
        </Button>
      </VStack>
    </Flex>
  );
};

export default SideMenu;
