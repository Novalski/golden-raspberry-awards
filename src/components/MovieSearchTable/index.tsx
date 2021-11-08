import React, { useState, useCallback, ChangeEvent, useMemo } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Select,
  IconButton,
  useToast,
} from '@chakra-ui/react';

import { getWinnersByYear } from '../../services';
import { IMovie } from '../../services/interfaces';
import { generateYears } from './utils';

const MovieSearchTable: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(0);

  const options = useMemo(() => {
    return generateYears();
  }, []);

  const toast = useToast();

  const searchClickHandler = useCallback(() => {
    if (!selectedYear) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getWinnersByYear(selectedYear);
        setMovies(data);
      } catch (err) {
        toast({
          title: 'Error on search movies.',
          description: 'Unknow Error!',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [selectedYear, toast]);

  const selectYearChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setSelectedYear(parseInt(value, 10));
    },
    [],
  );

  return (
    <Flex flexDir="column" maxH="480px">
      <Flex w="100%" justifyContent="space-around" marginBottom={5}>
        <Select
          maxW="480px"
          onChange={selectYearChangeHandler}
          placeholder="Select by year"
          role="combobox"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          isLoading={loading}
          onClick={searchClickHandler}
          role="button"
        />
      </Flex>
      <Table
        variant="striped"
        colorScheme="twitter"
        size="sm"
        data-testid="movies-table"
        role="table"
      >
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Year</Th>
            <Th>Title</Th>
          </Tr>
        </Thead>
        <Tbody>
          {movies.map(({ id, year, title }) => (
            <Tr key={id} role="tablist">
              <Td>{id}</Td>
              <Td>{year}</Td>
              <Td>{title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default MovieSearchTable;
