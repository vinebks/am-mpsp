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
        style={{ backgroundColor: 'transparent' }}
        height="100%"
        flex={1}
      >
        <Box
          width="100%"
          display="flex"
          style={{ backgroundColor: '#1b1c1c' }}
          border="solid 1px black"
          boxShadow={20}
          height="80px"
          justifyContent="space-between"
          margin={1}
          borderRadius={20}
        >
          <Box
            flex={1}
            display="flex"
            borderRadius={20}
            flexDirection="column"
            paddingLeft={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              ID
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px' }}
            >
              BR1283710293
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            borderRadius={20}
            flexDirection="column"
            paddingLeft={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              Nome
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px' }}
            >
              Vinicius Santos
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            borderRadius={20}
            flexDirection="column"
            paddingLeft={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              Cargo
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px' }}
            >
              Analista Senior
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            borderRadius={20}
            flexDirection="column"
            paddingLeft={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              Setor
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px' }}
            >
              PI
            </Typography>
          </Box>
          <Box
            flex={1}
            display="flex"
            borderRadius={20}
            flexDirection="column"
            paddingLeft={2}
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
            >
              Salario
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'white', fontSize: '20px' }}
            >
              R$ 6.000,00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
