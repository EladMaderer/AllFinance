import {USER_SIGN_IN, USER_SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
  userSignedIn: false,
  email: '',
};

const signInReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case USER_SIGN_IN:
      return {...state, userSignedIn: true, email: payload.email};
    case USER_SIGN_OUT:
      return {...state, userSignedIn: false, email: ''};
    default:
      return state;
  }
};

export default signInReducer;
