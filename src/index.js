import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { SidebarContextProvider } from './context/SidebarContext';

import { icons } from './assets/icons';
import { AuthContextProvider } from './context/AuthContext';

React.icons = icons;

const queryCache = new QueryCache();

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <AuthContextProvider>
        <SidebarContextProvider>
          <Router>
            <App />
          </Router>
          <ReactQueryDevtools initialIsOpen={false} />
        </SidebarContextProvider>
    </AuthContextProvider>
  </ReactQueryCacheProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
