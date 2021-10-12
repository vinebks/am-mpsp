import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import LogoMpsp from '../../assets/logo-mpsp-transparente.png';

export default function FooterComponent(): JSX.Element {
  return (
    <Box
      display="flex"
      style={{
        backgroundColor: '#1b1c1c',
        boxShadow: '-moz-initial',
        color: `grey`,
      }}
      minWidth="100%"
      justifyContent="center"
      alignContent="middle"
      padding={2}
    >
      <Box
        display="flex"
        borderTop="solid 2px yellow"
        width="100%"
        padding={2}
        justifyContent="center"
        alignContent="center"
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
    </Box>
  );
}
