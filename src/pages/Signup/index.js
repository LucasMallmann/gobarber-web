import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  name: Yup.string().required('O nome é obrigatório'),
});

export default function Signup() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
