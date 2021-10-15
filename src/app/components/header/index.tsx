/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import { Box, Link } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EyLogo from '../../assets/eylogo.png';
import Profile from '../../assets/profile.png';
import { IApplicationState } from '../../redux/ducks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 0.03,
    },
  }),
);

export default function MenuAppBar(): JSX.Element {
  const classes = useStyles();

  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [underline, setUnderline] = useState('homepage');

  const { loggedUser } = useSelector((state: IApplicationState) => state.user);

  return (
    <Box display="flex" flex={1}>
      <FormGroup />
      <AppBar
        position="static"
        style={{
          backgroundColor: '#1b1c1c',
          color: 'white',
        }}
      >
        <Toolbar>
          <Box paddingRight={5}>
            <img src={EyLogo} alt="logo" style={{ maxWidth: `80px` }} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => {
              history.push('/home');
            }}
            marginRight={5}
            height="80px"
            borderBottom={
              underline === 'homepage' ? 'solid 2px yellow' : 'none'
            }
          >
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.title}
              style={{
                color: 'yellow',
                fontSize: '25px',
                fontWeight: 'bold',
              }}
            >
              Pagina Inicial
            </Typography>
          </Box>

          <Box paddingRight={5}>
            <Box
              display="flex"
              alignItems="center"
              height="80px"
              onClick={() => {
                history.push('/dashboard');
              }}
              borderBottom={
                underline === 'dashboard' ? 'solid 2px yellow' : 'none'
              }
            >
              <Typography
                variant="subtitle1"
                className={classes.title}
                style={{
                  flex: 1,
                  color: 'yellow',
                  fontSize: '25px',
                  fontWeight: 'bold',
                }}
              >
                Dashboard
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              alignItems="center"
              height="80px"
              onClick={() => {
                history.push('/profile');
              }}
              borderBottom={
                underline === 'dashboard' ? 'solid 2px yellow' : 'none'
              }
            >
              <Typography
                variant="subtitle1"
                className={classes.title}
                style={{
                  flex: 1,
                  color: 'yellow',
                  fontSize: '25px',
                  fontWeight: 'bold',
                }}
              >
                Meu Perfil
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            className={classes.title}
            style={{
              flex: 1,
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          />

          <Typography
            variant="subtitle1"
            className={classes.title}
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {/* eslint-disable-next-line prettier/prettier */}
            Bem vindo(a)
            {loggedUser.cliente ? loggedUser.cliente.name : ''}
          </Typography>

          <Box display="flex" alignContent="end">
            <Box padding={2}>
              <img src={Profile} alt="logo" style={{ maxWidth: `70px` }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
