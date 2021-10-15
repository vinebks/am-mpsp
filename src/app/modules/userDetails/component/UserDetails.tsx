import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Close } from '@material-ui/icons';
import Scrollbars from 'react-custom-scrollbars';
import { useFormik } from 'formik';
import { closeUserDetails } from '../../../redux/ducks/user';
import { IApplicationState } from '../../../redux/ducks';
import { formatCurrency } from '../../../util/format';
import { Form } from '../../../components/Form';
import Yup from '../../../util/yup';
import { updateEmployeeSalary } from '../../../redux/ducks/empoyee';

type FormValues = {
  salary: number;
};

export default function UserDetails(): JSX.Element {
  const dispatch = useDispatch();

  const { loggedUser } = useSelector((state: IApplicationState) => state.user);
  const { employee } = useSelector(
    (state: IApplicationState) => state.employee,
  );

  const formik = useFormik({
    initialValues: {
      salary: 0,
    },
    validationSchema: (): Yup.Schema<any> =>
      Yup.object().shape({
        salary: Yup.number().required('Campo obrigaio'),
      }),
    onSubmit: (values: FormValues) => {
      const { salary } = values;
      console.log('Testando dispatch');

      dispatch(
        updateEmployeeSalary({
          userId: employee.userId,
          aumento: salary,
          gestorDocument: loggedUser.cliente.document,
        }),
      );
    },
  });

  return (
    <Box
      display="flex"
      flex={1}
      style={{ backgroundColor: '#1b1c1c' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flex={1}
        maxWidth="70%"
        height="90%"
        style={{ backgroundColor: '#3d3d3d' }}
        margin={3}
        borderRadius={20}
        boxShadow={20}
        flexDirection="column"
      >
        <Scrollbars>
          <Box
            display="flex"
            flex={1}
            maxHeight="200px"
            minHeight="200px"
            style={{ backgroundColor: '#3d3d3d' }}
            margin={3}
            borderRadius={20}
            boxShadow={20}
          >
            <Box
              display="flex"
              width="30%"
              margin={2}
              style={{ backgroundColor: 'transparent' }}
            >
              <Close
                style={{ color: 'red', height: '40px', width: '40px' }}
                onClick={() => {
                  dispatch(closeUserDetails());
                }}
              />
            </Box>
            <Box
              display="flex"
              flex={1}
              alignItems="center"
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
            >
              <Typography
                variant="h3"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                {employee.Nome}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flex={1}
            height="500px"
            justifyContent="space-between"
            style={{ backgroundColor: '#3d3d3d' }}
            margin={3}
            borderRadius={20}
            boxShadow={20}
          >
            <Box
              display="flex"
              flexDirection="column"
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
              padding={4}
            >
              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Matricula do Usuário
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.userId}
                </Typography>
              </Box>

              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Setor
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.siglaSetor}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Cargo
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.JobTitle}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
              padding={4}
            >
              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Sede da Empresa
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.Pais}
                </Typography>
              </Box>

              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Local/Cidade
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.locationCity}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Projeto
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.specficName}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
              padding={4}
            >
              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Data da Contratação
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'white', fontSize: '24px' }}
                >
                  {employee.hiringDate}
                </Typography>
              </Box>

              <Box paddingBottom={6}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Salario Atual
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'yellow', fontSize: '24px' }}
                >
                  {employee ? formatCurrency(Number(employee.Salary)) : '-'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flex={1}
            style={{ backgroundColor: '#3d3d3d' }}
            margin={3}
            flexDirection="column"
            borderRadius={20}
            boxShadow={20}
          >
            <Box
              display="flex"
              flex={1}
              paddingBottom={10}
              alignItems="center"
              justifyContent="center"
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
            >
              <Typography
                variant="h3"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Modificar Salário
              </Typography>
            </Box>
            <Box
              display="flex"
              flex={1}
              style={{ backgroundColor: 'transparent' }}
              borderRadius={20}
            >
              <Box paddingBottom={6} paddingLeft={4}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Salario Atual
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: 'yellow', fontSize: '24px' }}
                >
                  {employee ? formatCurrency(Number(employee.Salary)) : '-'}
                </Typography>
              </Box>

              <Box paddingBottom={6} paddingLeft={9}>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Digite o valor do aumento
                </Typography>
                <Form onSubmit={formik.handleSubmit}>
                  <TextField
                    name="salary"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '15px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '40px',
                      paddingLeft: '5px',
                    }}
                    variant="standard"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.salary}
                    InputProps={{ disableUnderline: true }}
                    // error={!!formik.errors.username && !!formik.touched.username}
                    type="number"
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    paddingTop={6}
                    paddingBottom={5}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      style={{
                        backgroundColor: 'yellow',
                        color: 'black',
                        fontWeight: 'bolder',
                        borderRadius: '20px',
                      }}
                    >
                      Entrar
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Box>
          </Box>
        </Scrollbars>
      </Box>
    </Box>
  );
}
