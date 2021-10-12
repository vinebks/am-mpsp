import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './form/index';
import HeaderProject from '../../components/header';
import backMpsp from '../../assets/backNavBar.png';

import FooterComponent from '../../components/footer';

export default function LoginPage(): JSX.Element {
  return (
    <Box style={{ backgroundColor: '#dcdcea' }}>
      <Box>
        <img
          src={backMpsp}
          alt="Logo"
          style={{ width: '100%', height: `100%` }}
        />
      </Box>
      <HeaderProject />
      <Box display="flex" flexDirection="row" flex={1} height="75vh">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            flex={1}
          >
            <LoginForm />
          </Box>
          <Box
            display="flex"
            style={{
              backgroundColor: 'white',
              boxShadow: '-moz-initial',
              color: `grey`,
            }}
            flex={1}
            maxHeight={100}
            minWidth="100%"
            justifyContent="center"
            alignContent="middle"
            padding={2}
          >
            <FooterComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
