import React from 'react';

import { Box } from '@chakra-ui/react';

const DashBoardBox: React.FC = ({ children }) => {
  return (
    <Box
      m={5}
      p={5}
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
      borderRadius="8px"
    >
      {children}
    </Box>
  );
};

export default DashBoardBox;
