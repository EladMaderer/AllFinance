import {USER_SIGN_IN, USER_SIGN_OUT} from './types';

export const signIn = email => ({
  type: USER_SIGN_IN,
  payload: {
    signedIn: true,
    email,
  },
});

export const signOut = () => ({
  type: USER_SIGN_OUT,
});
