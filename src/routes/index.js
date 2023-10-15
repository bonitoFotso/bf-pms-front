import React from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //



const Routes = () => {
  return (

          <React.Fragment>
              {/* Routes for authentication pages */}
              <AuthenticationRoutes />


              {/* Routes for main layouts */}
              <MainRoutes />
          </React.Fragment>
  );
};

export default Routes;
