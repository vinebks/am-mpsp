import React from 'react';
import { useFormik } from 'formik';
import { Box, TextField, Button } from '@material-ui/core';
import { Form } from '../../../components/Form';
// import Loading from '../../../shared/loading';
import Yup from '../../../util/yup';

type FormValues = {
  password: string;
  email: string;
  login: string;
  name: string;
  document: string;
  personType: string;
};

export default function RegisterForm(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
      login: '',
      name: '',
      document: '',
      personType: 'usuario',
    },
    validationSchema: (): Yup.Schema<any> =>
      Yup.object().shape({
        password: Yup.string().required('Campo obrigatorio'),
        email: Yup.string().required('Campo obrigatorio'),
        login: Yup.string().required('Campo obrigatorio'),
        name: Yup.string().required('Campo obrigatorio'),
        document: Yup.string().required('Campo obrigatorio'),
        personType: Yup.string().required('Campo obrigatorio'),
      }),
    onSubmit: (values: FormValues) => {
      console.log(values);
      const { password, email, login, name, document, personType } = values;
    },
  });

  return (
    <Box
      borderRadius="15px"
      minWidth="60vh"
      style={{ backgroundColor: 'white' }}
    >
      <Box margin={8} style={{ backgroundColor: 'white' }}>
        <Box display="flex" justifyContent="center" paddingBottom={4}>
          <h2>Cadastro de Usuários</h2>
        </Box>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            label="Nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={!!formik.errors.name && !!formik.touched.name}
            type="string"
            id="name"
          />

          <TextField
            name="document"
            label="Documento (CPF ou CPNJ)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.document}
            error={!!formik.errors.document && !!formik.touched.document}
            type="string"
            id="document"
          />
          <TextField
            name="email"
            label="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={!!formik.errors.email && !!formik.touched.email}
            type="email"
            id="email"
          />
          <TextField
            name="login"
            label="Login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            error={!!formik.errors.login && !!formik.touched.login}
            type="string"
            id="login"
            style={{ paddingTop: '5px' }}
          />

          <TextField
            name="password"
            label="Senha"
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
              type="submit"
              style={{
                backgroundColor: '#3c5b87',
                color: 'white',
              }}
            >
              Registrar
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
