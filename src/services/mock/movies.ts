import { IMovie } from '../interfaces';

const movies: IMovie[] = [
  {
    id: 11,
    year: 1981,
    title: 'Mommie Dearest',
    studios: ['Paramount Pictures'],
    producers: ['Frank Yablans'],
    winner: true,
  },
  {
    id: 12,
    year: 1981,
    title: 'Endless Love',
    studios: ['PolyGram', 'Universal Studios'],
    producers: ['Dyson Lovell'],
    winner: false,
  },
];

export default movies;
