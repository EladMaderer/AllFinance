import {USER_SIGN_IN} from './types';

export const signIn = (signedIn, email) => ({
  type: USER_SIGN_IN,
  payload: {
    signedIn,
    email,
  },
});
