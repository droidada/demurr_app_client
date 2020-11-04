import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const NotFound = React.lazy(() => import('./views/pages/page404/Page404'));

const App = () => {
  const { memoizedAuth, setAuth } = useContext(AuthContext);
  const location = useLocation();
  const [loc, setLoc] = useState(localStorage.prevLoc || '/');

  const setLocation = useCallback(() => {
    if (location.pathname !== '/login' && memoizedAuth) {
      localStorage.setItem('prevLoc', location.pathname);
      setLoc(localStorage.prevLoc);
    }
  }, [location.pathname, memoizedAuth]);

  useEffect(() => {
    setAuth();
    setLocation();
  }, [setAuth, setLocation]);

  return (
    <React.Suspense fallback={loading}>
      <Switch>
        <Route
          exact
          path="/login"
          name="Login Page"
          render={(props) =>
            memoizedAuth ? (
              <Redirect to={`${loc === '/' ? '/dashboard' : loc}`} />
            ) : (
              <Login {...props} />
            )
          }
        />
        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />

        <PrivateRoute path="/">
          <TheLayout />
        </PrivateRoute>

        {/* <PrivateRoute
          path="/"
          name="Home"
          render={(props) => <TheLayout {...props} />}
        /> */}

        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
