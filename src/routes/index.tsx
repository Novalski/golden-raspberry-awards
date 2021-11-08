import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list" element={<List />} />
    </ReactRoutes>
  );
};

export default Routes;
