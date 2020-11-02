import React from 'react';
import { Box } from '@material-ui/core';
import HomeUser from './components/home-page-user';
import MenuAppBar from '../../components/header';
import FooterComponent from '../../components/footer';
import backMpsp from '../../assets/backNavBar.png';

export default function HomePage(): JSX.Element {
  return (
    <Box
      display="flex"
      flex={1}
      style={{ backgroundColor: '#dcdcea' }}
      flexDirection="column"
      // minHeight="100vh"
    >
      <Box>
        <img
          src={backMpsp}
          alt="Logo"
          style={{ width: '100%', height: `100%` }}
        />
      </Box>
      <Box display="flex">
        <MenuAppBar />
      </Box>
      <Box display="flex" flex={1} minHeight="63vh">
        <HomeUser />
      </Box>
      <Box display="flex" flex={1}>
        <FooterComponent />
      </Box>
    </Box>
  );
}
