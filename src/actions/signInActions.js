import {USER_SIGN_IN, USER_SIGN_OUT} from './types';

export const signIn = userDetails => ({
  type: USER_SIGN_IN,
  payload: userDetails,
});

export const signOut = () => ({
  type: USER_SIGN_OUT,
});
