import React from 'react';
import { Box } from '@material-ui/core';
import MenuAppBar from '../../components/header';
import Analise from './component/BiAnalitics';

export default function Dashboard(): JSX.Element {
  return (
    <Box
      display="flex"
      height="100vh"
      flex={1}
      style={{ backgroundColor: '#1b1c1c' }}
      flexDirection="column"
    >
      <Box display="flex">
        <MenuAppBar />
      </Box>
      <Box display="flex" flex={1}>
        <Analise />
      </Box>
    </Box>
  );
}
