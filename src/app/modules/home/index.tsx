import React from 'react';
import { Box } from '@material-ui/core';
import HomeUser from './components/home-page-user';
import MenuAppBar from '../../components/header';

export default function HomePage(): JSX.Element {
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
      <Box display="flex" flex={1} minHeight="63vh">
        <HomeUser />
      </Box>
    </Box>
  );
}
