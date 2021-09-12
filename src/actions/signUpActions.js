import {USER_SIGN_UP, DELETE_USERS} from './types';

export const signUp = userDetails => ({
  type: USER_SIGN_UP,
  payload: userDetails,
});

export const deleteAllUsers = () => ({
  type: DELETE_USERS,
});
