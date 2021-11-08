import { IStudio } from '../../services/interfaces';

export const sortStudioMethod = (a: IStudio, b: IStudio): number => {
  if (a.winCount < b.winCount) return 1;

  if (a.winCount > b.winCount) return -1;

  return 0;
};
