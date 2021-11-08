export interface IMovie {
  id: number;
  title: string;
  year: number;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export interface IYear {
  year: number;
  winnerCount: number;
}

export interface IStudio {
  name: string;
  winCount: number;
}

export interface IInterval {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface IMaxMinInterval {
  min: IInterval;
  max: IInterval;
}

export interface IApiPageable {
  pageSize: number;
  pageNumber: number;
  totalElements: number;
  paged: boolean;
}

export interface IPagination {
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: false;
  size: number;
  number: number;
}
export interface IMoviesPageable {
  content: IMovie[];
  pagination?: IPagination;
}

export interface IMovieFilters {
  year?: number;
  winner?: boolean;
  page?: number;
}
