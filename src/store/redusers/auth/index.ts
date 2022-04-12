import { SetAuthAction, AuthState, ActionTypesEnum } from "./types";

const initialState: AuthState = {
  isAuth: true,
};

export default function authReduser(
  state = initialState,
  action: SetAuthAction
): AuthState {
  switch (action.type) {
    case ActionTypesEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}
