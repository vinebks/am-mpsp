import React from 'react';
import { Box } from '@material-ui/core';
import HeaderProject from '../../components/header';
import FooterComponent from '../../components/footer';
import backMpsp from '../../assets/backNavBar.png';
import RegisterForm from './form';

export default function RegisterPage(): JSX.Element {
  return (
    <Box style={{ backgroundColor: '#dcdcea' }}>
      <Box>
        <img
          src={backMpsp}
          alt="Logo"
          style={{ width: '100%', height: `100%` }}
        />
      </Box>
      <Box border={0}>
        <HeaderProject />
      </Box>
      <Box display="flex" flexDirection="row" flex={1} height="67vh">
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
            <RegisterForm />
          </Box>
        </Box>
      </Box>
      <FooterComponent />
    </Box>
  );
}
