import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '~/store/ducks/auth';
import { getAuth } from './auth';

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.AUTH_REQUEST, getAuth)]);
}
