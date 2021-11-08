import React from 'react';

import { Flex, Divider } from '@chakra-ui/react';

import { IMaxMinInterval } from '../../services/interfaces';
import DefaultTable from './DefaultTable';

interface IIntervalBetweenTableProps {
  minMaxInterval: IMaxMinInterval;
}

const IntervalBetweenTable: React.FC<IIntervalBetweenTableProps> = ({
  minMaxInterval,
}) => {
  return (
    <Flex flexDir="column" w="100%">
      <DefaultTable caption="Maximum" data={minMaxInterval.max} />
      <Divider />
      <DefaultTable caption="Minimum" data={minMaxInterval.min} />
    </Flex>
  );
};

export default IntervalBetweenTable;
