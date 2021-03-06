import {USER_SIGN_UP, DELETE_USERS} from '../actions/types';
import {encrypt_password} from '../utilities/utilities';

const INITIAL_STATE = {
  registeredUsers: [
    {
      username: 'Admin',
      email: 'admin@gmail.com',
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
        registeredUsers: [...state.registeredUsers, {...payload, admin: false}],
      };
    case DELETE_USERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default signUpReducer;
