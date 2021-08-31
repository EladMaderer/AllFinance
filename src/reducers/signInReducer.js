import {USER_SIGN_IN} from '../actions/types';

const INITIAL_STATE = {
  userSignedIn: false,
  email: '',
};

const signInReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case USER_SIGN_IN:
      return {...state, userSignedIn: payload.signedIn, email: payload.email};
    default:
      return state;
  }
};

export default signInReducer;
