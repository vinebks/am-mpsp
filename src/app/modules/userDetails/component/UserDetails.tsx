import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import Profile from '../../../assets/profile.png';

export default function UserDetails(): JSX.Element {
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
              Vinicius Santos
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
                vinicius.jesus@ernestyoung.com
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
                Recursos Humanos
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
                Gestor
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
                Matriz
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
                +55 (11)98971-2891
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
                -
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
