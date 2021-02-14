import { createReducer, createActions } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestUsers: [],
  successUsers: ['data'],
  failureUsers: ['error'],
  selectUser: ['id']
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */


export interface State {
  data: UserData[];
  fetching: boolean;
  error: string | void;
}

interface Action {
  data: UserData[];
  fetching: boolean;
  error: string | void;
}

export const INITIAL_STATE = Immutable<State>({
  data: [],
  fetching: false,
  error: undefined,
});

export type UserState = ImmutableObject<State>;

/* ------------- Reducers ------------- */
// request the data from an api
const request = (state: UserState) => state.merge({ fetching: true });

// successful api lookup
const success = (state: UserState, { data }: State) => state.merge({ fetching: false, data })

// Something went wrong somewhere.
const failure = (state: UserState, { error }: State) => state.merge({ fetching: false, error })

// 
/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_USERS]: request,
  [Types.SUCCESS_USERS]: success,
  [Types.FAILURE_USERS]: failure,
});
