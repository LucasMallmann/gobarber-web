import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import AvatarInput from './AvatarInput';

import { ActionCreators as UserActions } from '~/store/ducks/user';
import { ActionCreators as AuthActions } from '~/store/ducks/auth';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(UserActions.updateProfileRequest(data));
  }

  function logout() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />

        <Input name="password" type="password" placeholder="Sua nova senha" />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={logout}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
