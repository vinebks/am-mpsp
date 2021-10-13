import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './form/index';

import FooterComponent from '../../components/footer';

export default function LoginPage(): JSX.Element {
  return (
    <Box style={{ backgroundColor: '#1b1c1c' }}>
      <Box
        display="flex"
        flexDirection="row"
        flex={1}
        height="100vh"
        width="100%"
      >
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

          <FooterComponent />
        </Box>
      </Box>
    </Box>
  );
}
