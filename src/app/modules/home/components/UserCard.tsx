import React from 'react';
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    dfMessenger: {
      dfMessengerBotMessage: '#878fac',
    },
  }),
);

export default function UserCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" flex={1}>
      <Box
        display="flex"
        style={{ backgroundColor: '#1b1c1c' }}
        height="100%"
        flex={1}
      >
        <Box
          width="100%"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          // border="solid 2px yellow"
          boxShadow={20}
          height="100px"
          justifyContent="space-between"
          margin={1}
          borderRadius={20}
        >
          <Box
            display="flex"
            borderRadius={20}
            style={{ backgroundColor: 'white' }}
          >
            Testando as parada aqui
          </Box>
          <Box
            display="flex"
            borderRadius={20}
            style={{ backgroundColor: 'white' }}
          >
            Testando as parada aqui
          </Box>
          <Box
            display="flex"
            borderRadius={20}
            style={{ backgroundColor: 'white' }}
          >
            Testando as parada aqui
          </Box>
          <Box
            display="flex"
            borderRadius={20}
            style={{ backgroundColor: 'white' }}
          >
            Testando as parada aqui
          </Box>
          <Box
            display="flex"
            borderRadius={20}
            style={{ backgroundColor: 'white' }}
          >
            Testando as parada aqui
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
