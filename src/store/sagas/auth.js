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

export default all([takeLatest(AuthTypes.SING_IN_REQUEST, signIn)]);
