import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as AuthAction } from '~/store/ducks/auth';

export function* getAuth(credentials) {
  try {
    const response = yield call(api.post, '/sessions', {
      method: 'POST',
      email: credentials.payload.email,
      password: credentials.payload.password,
    });
    if (yield response.status === 200) {
      if (credentials.payload.rememberMe === true) {
        // do something
      }
      // do something else
    } else {
      yield put(AuthAction.getAuthFailure('Erro. Verifique suas credenciais.'));
    }
  } catch (error) {
    yield put(AuthAction.getAuthFailure('Erro ao efetuar login.'));
  }
}
