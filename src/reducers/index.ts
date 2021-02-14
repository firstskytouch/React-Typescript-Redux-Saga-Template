import { combineReducers } from 'redux';

import { userReducer, UserState } from './users';

export interface RootState {
  users: UserState
}

export const appReducer = combineReducers<RootState>({
  users: userReducer
});

export default appReducer;
