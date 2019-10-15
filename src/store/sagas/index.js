import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '~/store/ducks/auth';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.SING_IN_REQUEST, () => {})]);
}
