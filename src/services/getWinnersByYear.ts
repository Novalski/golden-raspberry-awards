import api from './api';
import { IMovie } from './interfaces';

export default async (year: number): Promise<IMovie[]> => {
  const { data } = await api.get<IMovie[]>(`/movies?winner=true&year=${year}`);

  return data;
};
