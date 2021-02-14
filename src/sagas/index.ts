import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '../reducers/users';
import { requestItems } from './user.sagas';

export const rootSaga = function* root() {
  yield all([
    yield takeLatest(
      UserTypes.REQUEST_USERS,
      requestItems,
    ),
  ]);
};
