import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    yield null;
  } catch (error) {
    console.log(error);
  }
}
