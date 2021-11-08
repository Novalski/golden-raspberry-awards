import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout />
    </ChakraProvider>
  );
};

export default App;
