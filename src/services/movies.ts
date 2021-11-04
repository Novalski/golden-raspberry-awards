import api from './api';
import { IMovie } from './interfaces';

interface IResponse {
  content: IMovie[];
}

export const getMovies = async (): Promise<IMovie[]> => {
  const { data } = await api.get<IResponse>('/movies?page=1&size=10');

  return data.content;
};
