import React from 'react';
import { Switch } from 'react-router-dom';

import AdminPage from '../../Pages/AdminPage';
import CustomRoute from '../CustomRoute';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/HomePage/Login';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';

const routes = [
  { component: HomePage, exact: true, path: '/' },
  { component: SignUpPage, exact: true, path: '/signup' },
  {
    component: AdminPage,
    exact: true,
    options: {
      fallbackComponent: LoginPage,
    },
    path: '/admin',
  },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <CustomRoute {...route} key={route.path} />
      ))}
    </Switch>
  );
}

export default Routes;