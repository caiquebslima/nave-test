import { UserInterface } from '../api';
export const Types = {
  SET_AUTH: 'auth/SET_AUTH',
  SET_USER: 'user/SET_USER',
  SET_ACTIVE_USERS: 'user/SET_ACTIVE_USERS',
};

type AuthType = {
  email: string;
  id: string;
  token: string;
};

interface UserStateInterface {
  auth: AuthType;
  user: UserInterface;
  users: UserInterface[];
}

// Reducer
const initialState: UserStateInterface = {
  auth: {
    email: '',
    id: '',
    token: '',
  },
  user: {
    name: '',
    job_role: '',
    admission_date: '',
    birthdate: '',
    user_id: '',
    id: '',
    project: '',
    url: '',
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

    case Types.SET_USER:
      const {
        name,
        job_role,
        admission_date,
        birthdate,
        user_id,
        project,
        url,
      } = action.payload;

      return {
        ...state,
        user: {
          name,
          job_role,
          admission_date,
          birthdate,
          user_id,
          id,
          project,
          url,
        },
      };
    case Types.SET_ACTIVE_USERS:
      const { users } = action.payload;

      return {
        ...state,
        ...users,
      };
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
export function setUser(payload: UserInterface) {
  return {
    type: Types.SET_USER,
    payload,
  };
}
export function setActiveUsers(payload: UserInterface) {
  return {
    type: Types.SET_ACTIVE_USERS,
    payload,
  };
}
