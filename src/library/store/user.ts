import { UserInterface } from '../api';
export const Types = {
  SET_AUTH: 'auth/SET_AUTH',
  SET_ACTIVE_USERS: 'user/SET_ACTIVE_USERS',
};

type AuthType = {
  email: string;
  id: string;
  token: string;
};

export interface UserStateInterface {
  auth: AuthType;
  users: [];
}

// Reducer
const initialState: UserStateInterface = {
  auth: {
    email: '',
    id: '',
    token: '',
  },
  users: [],
};

export default function reducer(
  state = initialState,
  action: { type: any; payload: any }
): UserStateInterface {
  switch (action.type) {
    case Types.SET_AUTH:
      const { email, id, token } = action.payload;
      return {
        ...state,
        auth: {
          email,
          id,
          token,
        },
      };
    case Types.SET_ACTIVE_USERS:
      const users: [] = action.payload;

      return { ...state, users: [...users] };
    default:
      return state;
  }
}
export function setAuth(payload: AuthType) {
  return {
    type: Types.SET_AUTH,
    payload,
  };
}
export function setActiveUsers(payload: UserInterface) {
  return {
    type: Types.SET_ACTIVE_USERS,
    payload,
  };
}
