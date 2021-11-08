import React, { ChangeEvent, useCallback } from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  Select,
  Flex,
  Text,
  InputGroup,
  IconButton,
  InputRightElement,
} from '@chakra-ui/react';

import { IMovie, IMovieFilters } from '../../services/interfaces';

interface IMoviesListProps {
  movies: IMovie[];
  filterHandler: (filter: IMovieFilters) => void;
}

const MoviesList: React.FC<IMoviesListProps> = ({ movies, filterHandler }) => {
  const onFilterYear = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 0) {
        filterHandler({ year: undefined });
        return;
      }

      if (e.target.value.length < 4) return;

      filterHandler({ year: parseInt(e.target.value, 10), page: 0 });
    },
    [filterHandler],
  );

  const onFilterWinner = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === '') {
        filterHandler({ winner: undefined });
        return;
      }

      filterHandler({ winner: e.target.value === 'true', page: 0 });
    },
    [filterHandler],
  );

  return (
    <Table variant="striped" colorScheme="twitter" size="sm" w="100%">
      <Thead>
        <Tr>
          <Th>
            <Text as="span">ID</Text>
          </Th>
          <Th>
            <Flex
              flexDir="column"
              alignSelf="stretch"
              w="full"
              marginBottom={2}
            >
              <Text as="span" marginBottom={2}>
                Year
              </Text>
              <InputGroup size="sm" maxW={200}>
                <Input
                  placeholder="Year"
                  size="sm"
                  variant="filled"
                  type="number"
                  maxLength={4}
                  onChange={onFilterYear}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="clear"
                    icon={<CloseIcon />}
                    size="sm"
                    h={6}
                    marginRight={1}
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Th>
          <Th>
            <Text as="span">Title</Text>
          </Th>
          <Th>
            <Flex
              flexDir="column"
              alignSelf="stretch"
              w="full"
              marginBottom={2}
            >
              <Text as="span" marginBottom={2}>
                Winner?
              </Text>
              <Select
                placeholder="Yes/No"
                size="sm"
                variant="filled"
                onChange={onFilterWinner}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>
            </Flex>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {movies.map(({ id, year, title, winner }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{year}</Td>
            <Td>{title}</Td>
            <Td>{winner ? 'Yes' : 'No'}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default MoviesList;
