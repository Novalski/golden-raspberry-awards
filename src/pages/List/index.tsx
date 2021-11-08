import React, { useEffect, useState, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Heading, Flex } from '@chakra-ui/react';

import MoviesList from '../../components/MoviesList';
import { getMovies } from '../../services';
import { IMovieFilters, IMoviesPageable } from '../../services/interfaces';
import { Container } from './styles';

const List: React.FC = () => {
  const [data, setData] = useState<IMoviesPageable>({ content: [] });
  const [filters, setFilters] = useState<IMovieFilters>({});

  const fetchMovies = useCallback(async () => {
    const result = await getMovies(filters);
    setData(result);
  }, [filters]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const setPage = useCallback((page: number) => {
    setFilters(current => ({ ...current, page }));
  }, []);

  const filterHandler = useCallback((filter: IMovieFilters) => {
    console.log('FILTERS', filter);
    setFilters(current => ({ ...current, ...filter }));
  }, []);

  return (
    <Flex flexDir="column" p={10} w="full" alignSelf="stretch">
      <Heading size="md" marginBottom={5}>
        List movies
      </Heading>
      <MoviesList movies={data.content} filterHandler={filterHandler} />
      {data?.pagination && (
        <Container>
          <ReactPaginate
            previousLabel={<ChevronLeftIcon />}
            nextLabel={<ChevronRightIcon />}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={data.pagination.totalPages}
            containerClassName="movies-pagination"
            marginPagesDisplayed={3}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setPage(selected)}
          />
        </Container>
      )}
    </Flex>
  );
};

export default List;
