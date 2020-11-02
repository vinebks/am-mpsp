import React from 'react';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron-config';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import history from './util/browser-history';
import { store, persistor } from './redux';
import 'react-toastify/dist/ReactToastify.css';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000} pauseOnHover />
        </Router>
      </PersistGate>
    </Provider>
  );
}
