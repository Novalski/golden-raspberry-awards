import React from 'react';

import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

import { IInterval } from '../../services/interfaces';

interface IDefaultTableProps {
  caption: string;
  data: IInterval;
}

const DefaultTable: React.FC<IDefaultTableProps> = ({ caption, data }) => {
  const { producer, interval, followingWin, previousWin } = data;

  return (
    <Table variant="striped" colorScheme="twitter" size="sm">
      <TableCaption placement="top">{caption}</TableCaption>
      <Thead>
        <Tr>
          <Th>Producer</Th>
          <Th>Interval</Th>
          <Th>Previous Year</Th>
          <Th>Following Year</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{producer}</Td>
          <Td>{interval}</Td>
          <Td>{previousWin}</Td>
          <Td>{followingWin}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default DefaultTable;
