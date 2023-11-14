import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import C1 from './c1';
import C2 from './c2';

import Tab_client from './tab'
import ClientChart from './chart';
ClientChart
const ClientListCreate = () => {
  
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const [error, setError] = useState(null);



  return (
    <Grid container spacing={gridSpacing}>
      <ClientChart />
      <Grid item xs={12}>
        <Grid item xs={12} >
          </Grid>
      </Grid>
      <Grid item xs={12}>
      <Tab_client/>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          
          <Grid item xs={12} md={4}>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClientListCreate;
