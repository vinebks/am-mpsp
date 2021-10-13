import React from 'react';
import { useFormik } from 'formik';
import { Box, TextField, Button, Link, Typography } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../../components/Form';
import Yup from '../../../util/yup';
import history from '../../../util/browser-history';
import EyLogo from '../../../assets/eylogo.png';
import { fetchUserData } from '../../../redux/ducks/user';
import { IApplicationState } from '../../../redux/ducks';

type FormValues = {
  username: string;
  password: string;
};

export default function LoginForm(): JSX.Element {
  const { isLoading } = useSelector((state: IApplicationState) => state.user);

  const dispatch = useDispatch();

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
      console.log('Testando dispatch');
      dispatch(fetchUserData({ username, password }));
    },
  });

  return (
    <Box
      display="flex"
      borderRadius="20px"
      boxShadow={20}
      width="100%"
      style={{ backgroundColor: '#252626', border: 'solid 4px yellow' }}
    >
      <Box margin={10} style={{ backgroundColor: '#252626' }}>
        <Box display="flex" justifyContent="center" paddingBottom={4}>
          <img src={EyLogo} alt="logo" style={{ maxWidth: `140px` }} />
        </Box>
        <Form onSubmit={formik.handleSubmit}>
          <Typography
            variant="subtitle2"
            style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}
          >
            Usuario
          </Typography>
          <TextField
            name="username"
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
            value={formik.values.username}
            // error={!!formik.errors.username && !!formik.touched.username}
            type="string"
            id="login__username"
          />
          <Typography
            variant="subtitle2"
            style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}
          >
            Senha
          </Typography>
          <TextField
            name="password"
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              justifyContent: 'center',
              height: '40px',
              alignItems: 'center',
              paddingLeft: '5px',
            }}
            variant="standard"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            // error={!!formik.errors.password && !!formik.touched.password}
            id="login__password"
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
              disabled={isLoading}
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

          <Typography variant="subtitle2" align="center">
            <Link
              variant="inherit"
              href="/register"
              style={{ color: 'yellow' }}
            >
              Esqueci minha senha
            </Link>
          </Typography>
        </Form>
      </Box>
    </Box>
  );
}
