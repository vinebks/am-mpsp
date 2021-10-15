import React from 'react';
import {
  Box,
  makeStyles,
  Theme,
  Link,
  createStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import Scrollbars from 'react-custom-scrollbars';
import { HighlightOff } from '@material-ui/icons';
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
        justifyContent="space-between"
        style={{ backgroundColor: '#1b1c1c' }}
        borderRight="solid 4px yellow"
        height="100%"
      >
        <Box
          width="400px"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          height="350px"
          margin={5}
          borderRadius={20}
          flexDirection="column"
          justifyContent="space-between"
          // border="solid 4px yellow"
          boxShadow={20}
        >
          <Box display="flex" flexDirection="column" textAlign="center">
            <Typography
              variant="h3"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Carteira
            </Typography>
            <Box display="flex" flexDirection="column" textAlign="center">
              <Typography
                variant="subtitle1"
                style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                Recursos Humanos
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            paddingLeft={2}
            // border="solid 4px black"
            boxShadow={20}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}
            >
              Saldo
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'yellow', fontSize: '25px', fontWeight: 'bold' }}
            >
              R$ 19.999,00
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            paddingLeft={2}
            paddingBottom={2}
            // border="solid 4px black"
            boxShadow={20}
            borderRadius={20}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}
            >
              Valor Aplicado
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'yellow', fontSize: '25px', fontWeight: 'bold' }}
            >
              R$ 291.999,00
            </Typography>
          </Box>
        </Box>
        <Box
          width="100px"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          // border="solid 2px yellow"
          alignItems="center"
          height="100px"
          margin={5}
          borderRadius={20}
        >
          <Link
            variant="inherit"
            href="/"
            underline="none"
            style={{
              color: 'yellow',
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          >
            <HighlightOff
              style={{ height: '50px', width: '50px', color: 'red' }}
            />
          </Link>
          <Link
            variant="inherit"
            href="/"
            underline="none"
            style={{
              color: 'yellow',
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '10px',
              }}
            >
              Sair
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        style={{ backgroundColor: '#3b3b3b' }}
        height="100%"
        flexDirection="column"
        flex={1}
      >
        <Box
          flex={1}
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          height="20vh"
          margin={5}
          alignItems="center"
          justifyContent="center"
          borderRadius={20}
          boxShadow={20}
        >
          <Typography
            variant="subtitle1"
            style={{ color: 'yellow', fontSize: '50px', fontWeight: 'bold' }}
          >
            Lista de usuarios
          </Typography>
        </Box>
        <Scrollbars>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Scrollbars>
      </Box>
    </Box>
  );
}
