import api from './api';
import {
  IMovieFilters,
  IApiPageable,
  IMovie,
  IMoviesPageable,
} from './interfaces';

interface IResponse {
  content: IMovie[];
  pageable: IApiPageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: false;
  size: number;
  number: number;
}

const toIMoviesPageable = (data: IResponse): IMoviesPageable => {
  const {
    content,
    pageable,
    totalElements,
    totalPages,
    last,
    first,
    size,
    number,
  } = data;

  return {
    content,
    pagination: pageable.paged
      ? {
          totalElements,
          totalPages,
          last,
          first,
          size,
          number,
        }
      : undefined,
  };
};

export default async ({
  year,
  winner,
  page,
}: IMovieFilters): Promise<IMoviesPageable> => {
  let url = `/movies?size=10&page=${page || 0}`;

  if (year) url += `&year=${year}`;

  if (winner !== undefined) url += `&winner=${winner}`;

  const { data } = await api.get<IResponse>(url);

  return toIMoviesPageable(data);
};
