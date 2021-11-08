import api from './api';
import { IYear } from './interfaces';

interface IResponse {
  years: IYear[];
}

export default async (): Promise<IYear[]> => {
  const {
    data: { years },
  } = await api.get<IResponse>(
    '/movies?projection=years-with-multiple-winners',
  );

  return years;
};
