import React, { useEffect, useState } from 'react';

import { Heading, Grid, useBreakpointValue, Box } from '@chakra-ui/react';

import IntervalBetweenTable from '../../components/IntervalBetweenTable';
import MovieSearchTable from '../../components/MovieSearchTable';
import MultipleWinnersTable from '../../components/MultipleWinnersTable';
import TopStudiosTable from '../../components/TopStudiosTable';
import {
  getRankedStudios,
  getMaxMinIntervalForProducers,
  getYearsWithMultipleWinners,
} from '../../services';
import { IYear, IStudio, IMaxMinInterval } from '../../services/interfaces';
import DashBoardBox from './DashBoardBox';
import { sortStudioMethod } from './utils';

const Dashboard: React.FC = () => {
  const template = useBreakpointValue({
    md: 'repeat(2, 1fr)',
    sm: 'repeat(1, 1fr)',
    base: 'repeat(1, 80%)',
  });

  const gap = useBreakpointValue({
    md: 2,
    sm: 1,
  });

  const [years, setYears] = useState<IYear[]>([]);
  const [studios, setStudios] = useState<IStudio[]>([]);
  const [minMaxInterval, setMinMaxInterval] = useState<IMaxMinInterval | null>(
    null,
  );

  useEffect(() => {
    getYearsWithMultipleWinners().then(data => setYears(data));
    getRankedStudios().then(data => {
      const sorted = data.sort(sortStudioMethod);
      setStudios(sorted.slice(0, 3));
    });
    getMaxMinIntervalForProducers().then(data => setMinMaxInterval(data));
  }, []);

  return (
    <Box w="100%">
      <Grid templateColumns={template} gap={gap}>
        <DashBoardBox>
          <Heading size="md">List years with multiple winners</Heading>
          <MultipleWinnersTable years={years} />
        </DashBoardBox>
        <DashBoardBox>
          <Heading size="md">Top 3 studios with winners</Heading>
          <TopStudiosTable studios={studios} />
        </DashBoardBox>

        <DashBoardBox>
          <Heading size="md">
            Producer with longest and shortest inteval between wins
          </Heading>
          {minMaxInterval && (
            <IntervalBetweenTable minMaxInterval={minMaxInterval} />
          )}
        </DashBoardBox>
        <DashBoardBox>
          <MovieSearchTable />
        </DashBoardBox>
      </Grid>
    </Box>
  );
};

export default Dashboard;
