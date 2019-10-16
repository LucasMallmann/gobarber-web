import { all, takeLatest, call, put } from 'redux-saga/effects';
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
  const { email, password } = payload;

  const response = yield call(api.post, '/sessions', { email, password });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Você não é prestador de serviço');
    return;
  }

  yield put(AuthActions.signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest(AuthTypes.SING_IN_REQUEST, signIn)]);
