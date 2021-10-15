import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { IEmployeesdetails, openUserDetails } from '../../../redux/ducks/user';
import { formatCurrency } from '../../../util/format';
import { fetchEmployeeData } from '../../../redux/ducks/empoyee';

type IProps = {
  users: IEmployeesdetails;
};

export default function UserCard(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  const { users } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      flex={1}
      onClick={() => {
        dispatch(fetchEmployeeData({ userId: users.userId }));
        dispatch(openUserDetails());
      }}
    >
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
              {users.userId}
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
              {users.Nome}
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
              {users.JobTitle}
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
              {users.siglaSetor}
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
              {formatCurrency(Number(users.Salary))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
