import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import EyLogo from '../../assets/eylogo.png';

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
          <img src={EyLogo} alt="logo" style={{ maxWidth: `110px` }} />
        </Box>
        <Divider variant="middle" orientation="vertical" />
        <Typography
          variant="subtitle2"
          align="center"
          style={{ maxWidth: '60%' }}
        >
          EY refere-se à organização global e pode se referir a uma ou mais das
          firmas-membro da Ernst & Young Global Limited, cada uma das quais é
          uma entidade legal separada. A Ernst & Young Global Limited, uma
          empresa do Reino Unido limitada por garantia, não presta serviços aos
          clientes. A EY cumpre e observa todas as normas legais e regulatórias
          profissionais. Consulte a EY Br para saber quais serviços são
          oferecidos no Brasil. A EY Br não presta serviços advocatícios no
          Brasil.
        </Typography>
      </Box>
    </Box>
  );
}
