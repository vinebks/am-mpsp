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
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import { IApplicationState } from '../../../redux/ducks';
import ProfileComponent from '../../profile/component/ProfileComponent';
import UserDetails from '../../userDetails/component/UserDetails';
import { formatCurrency } from '../../../util/format';
import { IEmployeesdetails } from '../../../redux/ducks/user';

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

  const {
    userDetails,
    loggedUser,
    budgetAndEmployees,
    isLoading,
  } = useSelector((state: IApplicationState) => state.user);

  const budgetAndEmployeesIsOk = budgetAndEmployees.users
    ? budgetAndEmployees.users
    : [];

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
                {loggedUser.cliente ? loggedUser.cliente.setor : '-'}
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
              {loggedUser.cliente
                ? formatCurrency(loggedUser.cliente.balance)
                : '-'}
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
              {budgetAndEmployees
                ? formatCurrency(budgetAndEmployees.budget)
                : '-'}
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
        {!userDetails && (
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
              Lista de Colaboradores
            </Typography>
          </Box>
        )}
        {userDetails ? (
          <UserDetails />
        ) : (
          <Scrollbars>
            {isLoading ? (
              <Box>loading</Box>
            ) : (
              budgetAndEmployeesIsOk.length > 0 &&
              budgetAndEmployeesIsOk.map((employees: IEmployeesdetails) => (
                <UserCard users={employees} key={employees.userId} />
              ))
            )}
          </Scrollbars>
        )}
      </Box>
    </Box>
  );
}
