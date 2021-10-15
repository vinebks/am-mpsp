import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AbsoluteLoading from './shared/loading/absolute-loading';
import HomePage from './modules/home';

const LoginPage = lazy(() => import('./modules/login'));
const RegisterPage = lazy(() => import('./modules/register'));
const ProfilePage = lazy(() => import('./modules/profile'));
const Dashboard = lazy(() => import('./modules/dashboard'));

export function Routes(): JSX.Element {
  return (
    <Suspense fallback={<AbsoluteLoading />}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
}
