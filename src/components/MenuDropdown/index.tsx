import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react';

import { Routes } from '../../routes/types';

const MenuDropdown: React.FC = () => {
  const navigate = useNavigate();

  const menuItemClickHandler = useCallback(
    (route: Routes) => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <Flex marginRight={5}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
        />
        <MenuList>
          <MenuItem onClick={() => menuItemClickHandler('/')}>
            Dashboard
          </MenuItem>
          <MenuItem onClick={() => menuItemClickHandler('/list')}>
            List
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MenuDropdown;
