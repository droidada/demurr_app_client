import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './context/AuthContext';

function PrivateRoute({ children, ...rest }) {
  const { memoizedAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        memoizedAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
