import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Profile from '../../../assets/profile.png';
import { IApplicationState } from '../../../redux/ducks';

export default function ProfileComponent(): JSX.Element {
  const { loggedUser } = useSelector((state: IApplicationState) => state.user);

  return (
    <Box
      display="flex"
      flex={1}
      style={{ backgroundColor: '#1b1c1c' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flex={1}
        maxWidth="70%"
        height="90%"
        style={{ backgroundColor: '#3d3d3d' }}
        margin={3}
        borderRadius={20}
        boxShadow={20}
        flexDirection="column"
      >
        <Box
          display="flex"
          flex={1}
          maxHeight="200px"
          style={{ backgroundColor: '#3d3d3d' }}
          margin={3}
          borderRadius={20}
          boxShadow={20}
        >
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: 'transparent' }}
            borderRadius={20}
          >
            <Typography
              variant="h3"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              {loggedUser.cliente ? loggedUser.cliente.name : '='}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="30%"
            margin={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <img src={Profile} alt="logo" style={{ maxWidth: `190px` }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flex={1}
          height="500px"
          style={{ backgroundColor: '#3d3d3d' }}
          margin={3}
          borderRadius={20}
          boxShadow={20}
        >
          <Box
            display="flex"
            flexDirection="column"
            style={{ backgroundColor: 'transparent' }}
            borderRadius={20}
            padding={4}
          >
            <Box paddingBottom={6}>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                E-mail
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                {loggedUser.cliente ? loggedUser.cliente.email : '='}
              </Typography>
            </Box>

            <Box paddingBottom={6}>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Setor
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                {loggedUser.cliente ? loggedUser.cliente.setor : '='}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Cargo
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                {loggedUser.cliente ? loggedUser.cliente.cargo : '='}
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            style={{ backgroundColor: 'transparent' }}
            borderRadius={20}
            padding={4}
          >
            <Box paddingBottom={6}>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Sede da Empresa
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                {loggedUser.cliente ? loggedUser.cliente.address.country : '='}
              </Typography>
            </Box>

            <Box paddingBottom={6}>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Contato
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                {loggedUser.cliente ? loggedUser.cliente.contact : '='}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Projeto
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '24px' }}
              >
                Gerenciamento de Projeto
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
