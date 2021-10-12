import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import LogoMpsp from '../../assets/logo-mpsp-transparente.png';

export default function FooterComponent(): JSX.Element {
  return (
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
      <Box>
        <img src={LogoMpsp} alt="logo" style={{ maxWidth: `170px` }} />
      </Box>
      <Divider variant="middle" orientation="vertical" />
      <Typography paragraph align="center">
        MINISTÉRIO PÚBLICO DO ESTADO DE SÃO PAULO
        <Typography variant="subtitle2">
          Rua Riachuelo, 115 - São Paulo - CEP 01007-904 - PABX: 11
          <p />
          3119.9000 Horário de Atendimento: das 9h às 19h
          <p />
          Todos os direitos reservados
        </Typography>
      </Typography>
    </Box>
  );
}
