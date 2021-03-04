export const Types = {
  SET_USER: 'auth/SET_USER',
};

type InitialStateType = {
  email: string;
  id: string;
  token: string;
};

interface ReducerType {
  user: InitialStateType;
}

// Reducer
const initialState: ReducerType = {
  user: {
    email: '',
    id: '',
    token: '',
  },
};

export default function reducer(
  state = initialState,
  action: { type: any; payload: any }
): ReducerType {
  switch (action.type) {
    case Types.SET_USER:
      const { email, id, token } = action.payload;

      return {
        ...state,
        user: {
          email,
          id,
          token,
        },
      };

    default:
      return state;
  }
}

export function setUser(payload: InitialStateType) {
  return {
    type: Types.SET_USER,
    payload,
  };
}
