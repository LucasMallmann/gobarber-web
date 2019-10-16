import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  Types as AuthTypes,
  ActionCreators as AuthActions,
} from '~/store/ducks/auth';

import api from '~/services/api';
import history from '~/services/history';

/**
 * Saga to run to login the user
 * @param {object} payload
 */
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Você não é prestador de serviço');
      return;
    }

    yield put(AuthActions.signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(AuthActions.signFailure());
  }
}

/**
 * Saga effect to Store the a new User
 * @param {object} payload
 */
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    toast.success('Conta criada com sucesso');

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(AuthActions.signFailure());
  }
}

export default all([
  takeLatest(AuthTypes.SING_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
]);
