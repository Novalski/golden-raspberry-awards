import React from 'react';

import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

import { IStudio } from '../../services/interfaces';

interface ITopStudiosTableProps {
  studios: IStudio[];
}

const TopStudiosTable: React.FC<ITopStudiosTableProps> = ({ studios }) => {
  return (
    <Table variant="striped" colorScheme="twitter" size="sm">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Win Count</Th>
        </Tr>
      </Thead>
      <Tbody>
        {studios.map(({ name, winCount }) => (
          <Tr key={name}>
            <Td>{name}</Td>
            <Td>{winCount}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TopStudiosTable;
