import React from 'react';
import { useFormik } from 'formik';
import { Box, TextField, Button, Link, Typography } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
import { Form } from '../../../components/Form';
import Yup from '../../../util/yup';
import history from '../../../util/browser-history';

type FormValues = {
  username: string;
  password: string;
};

export default function LoginForm(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: (): Yup.Schema<any> =>
      Yup.object().shape({
        username: Yup.string().required('Campo obrigaio'),
        password: Yup.string().required('Campo obrigaio'),
      }),
    onSubmit: (values: FormValues) => {
      const { username, password } = values;
      console.log(values);
    },
  });

  return (
    <Box
      borderRadius="15px"
      width="fit-content"
      style={{ backgroundColor: 'white' }}
    >
      <Box margin={8} style={{ backgroundColor: 'white' }}>
        <Box display="flex" justifyContent="center" paddingBottom={4}>
          <h2>Insira seu Login</h2>
        </Box>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            name="username"
            label="Insira seu login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={!!formik.errors.username && !!formik.touched.username}
            type="string"
            id="login__username"
          />

          <TextField
            name="password"
            label="Insira sua senha"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={!!formik.errors.password && !!formik.touched.password}
            id="login__password"
          />

          <Box
            display="flex"
            justifyContent="center"
            paddingTop={6}
            paddingBottom={2}
          >
            <Button
              variant="contained"
              onClick={
                (formik.submitForm,
                (): void => {
                  history.push('/home');
                })
              }
              type="submit"
              style={{
                backgroundColor: '#3c5b87',
                color: 'white',
              }}
            >
              Entrar
            </Button>
          </Box>

          <Typography variant="subtitle2" align="center">
            <Link variant="inherit" href="/register">
              Ainda nao possui uma conta? Registre-se
            </Link>
          </Typography>
          <Box display="flex" flex={1} justifyContent="center" paddingTop={2}>
            <FacebookLogin
              buttonStyle={{
                color: 'white',
                backgroundColor: '#2a5eca',
                borderRadius: '10px',
                width: '20vh',
                height: '5vh',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '15px',
                minHeight: '5vh',
                minWidth: '20vh',
              }}
              appId="715392232719783"
              fields="name, email"
              cssClass="my-facebook-button-class"
              callback={FacebookLogin.call}
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
