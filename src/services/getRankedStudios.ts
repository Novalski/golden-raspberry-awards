import api from './api';
import { IStudio } from './interfaces';

interface IResponse {
  studios: IStudio[];
}

export default async (): Promise<IStudio[]> => {
  const {
    data: { studios },
  } = await api.get<IResponse>('/movies?projection=studios-with-win-count');

  return studios;
};
