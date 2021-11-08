import api from './api';
import { IInterval, IMaxMinInterval } from './interfaces';

interface IResponse {
  min: IInterval[];
  max: IInterval[];
}

export default async (): Promise<IMaxMinInterval> => {
  const { data } = await api.get<IResponse>(
    '/movies?projection=max-min-win-interval-for-producers',
  );

  const [min] = data.min;
  const [max] = data.max;
  return {
    min,
    max,
  };
};
