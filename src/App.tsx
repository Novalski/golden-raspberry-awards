import React, { useEffect } from 'react';

import { Heading } from '@chakra-ui/react';

import { getMovies } from './services/movies';

const App: React.FC = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log(data);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Heading>{process.env.REACT_APP_TITLE}</Heading>
    </div>
  );
};

export default App;
