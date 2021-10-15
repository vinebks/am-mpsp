import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import Profile from '../../../assets/profile.png';

export default function ProfileComponent(): JSX.Element {
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
            flex={1}
            flexDirection="column"
            style={{ backgroundColor: 'transparent' }}
            justifyContent="space-between"
            borderRadius={20}
            padding={4}
          >
            {/* <Typography
              variant="subtitle1"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Name
            </Typography> */}
            <TextField
              size="small"
              label="E-mail"
              variant="filled"
              value="vinicius.jesus@hubfintech.com.br"
              disabled
              color="primary"
              InputProps={{ disableUnderline: true }}
              style={{ borderRadius: '10px', backgroundColor: 'white' }}
            />

            <TextField
              size="small"
              label="Cargo"
              variant="filled"
              value="Gestor"
              disabled
              color="primary"
              InputProps={{ disableUnderline: true }}
              style={{ borderRadius: '10px', backgroundColor: 'white' }}
            />

            <TextField
              size="small"
              label="Setor"
              variant="filled"
              value="Recursos Humanos"
              disabled
              color="primary"
              InputProps={{ disableUnderline: true }}
              style={{ borderRadius: '10px', backgroundColor: 'white' }}
            />
          </Box>
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            style={{ backgroundColor: 'transparent' }}
            justifyContent="space-between"
            borderRadius={20}
            padding={4}
          >
            {/* <Typography
              variant="subtitle1"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Name
            </Typography> */}

            <TextField
              size="small"
              label="Contato"
              variant="filled"
              value="+55 (11)98831-3356"
              disabled
              color="primary"
              InputProps={{ disableUnderline: true }}
              style={{
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '20px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
