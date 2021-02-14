import { call, put } from 'redux-saga/effects';

import UserActions from '../reducers/users';
import API from '../services/api';

const { getAllUser } = API

export function* requestItems() {
  const response = yield call(getAllUser);
  if (response.ok) {
    const { data } = response;
    yield put(UserActions.successUsers(data));
  }
}
