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
import UserCard from './UserCard';

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

export default function HomeUser(): JSX.Element {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" flex={1}>
      <Box
        width="25%"
        display="flex"
        flexDirection="column"
        style={{ backgroundColor: '#1b1c1c' }}
        borderRight="solid 4px yellow"
        height="100%"
      >
        <Box
          width="400px"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          height="200px"
          margin={5}
          borderRadius={20}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="solid 4px yellow"
          boxShadow={20}
        >
          <Box display="flex">
            <Typography
              variant="h2"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Carteira
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" textAlign="center">
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              Recursos Humanos
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'yellow', fontSize: '25px', fontWeight: 'bold' }}
            >
              Saldo: R$ 19.999,00
            </Typography>
          </Box>
        </Box>
        <Box
          width="100px"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          border="solid 2px yellow"
          height="100px"
          margin={5}
          borderRadius={20}
        />
      </Box>
      <Box
        display="flex"
        style={{ backgroundColor: '#1b1c1c' }}
        height="100%"
        flex={1}
      >
        <UserCard />
      </Box>
    </Box>
  );
}
