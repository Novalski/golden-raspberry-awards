import React from 'react';

import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import MovieSearchTable from '.';
import movies from '../../services/mock/movies';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('MovieSearchTable', () => {
  test('Renders MovieSearchTable component', () => {
    render(<MovieSearchTable />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('Display Search Movies List', async () => {
    const promise = Promise.resolve(movies);
    mockedAxios.get.mockImplementationOnce(() => promise);

    render(<MovieSearchTable />);

    act(() => userEvent.selectOptions(screen.getByRole('combobox'), '1986'));
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getAllByRole('tablist')).toHaveLength(0);
    });
  });
});
