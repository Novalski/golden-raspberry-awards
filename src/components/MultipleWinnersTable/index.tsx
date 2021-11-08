import React from 'react';

import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

import { IYear } from '../../services/interfaces';

interface IMultipleWinnersTableProps {
  years: IYear[];
}

const MultipleWinnersTable: React.FC<IMultipleWinnersTableProps> = ({
  years,
}) => {
  return (
    <Table variant="striped" colorScheme="twitter" size="sm">
      <Thead>
        <Tr>
          <Th>Year</Th>
          <Th>With Count</Th>
        </Tr>
      </Thead>
      <Tbody>
        {years.map(({ year, winnerCount }) => (
          <Tr key={year}>
            <Td>{year}</Td>
            <Td>{winnerCount}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default MultipleWinnersTable;
