import {USER_SIGN_UP, DELETE_USERS} from '../actions/types';
import {encrypt_password} from '../utilities/utilities';

const INITIAL_STATE = {
  userDetails: [
    {
      username: 'Admin',
      email: 'blameAdmin@gmail.com',
      password: encrypt_password('Blame300!'),
      admin: true,
    },
  ],
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case USER_SIGN_UP:
      return {
        ...state,
        userDetails: [...state.userDetails, {...payload, admin: false}],
      };
    case DELETE_USERS:
      return state;
    default:
      return state;
  }
};

export default signUpReducer;
