import { IUser } from "./../../../types/IUser";
import { AuthState, ActionTypesEnum, AuthActions } from "./types";

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: "",
};

export default function authReduser(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case ActionTypesEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case ActionTypesEnum.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypesEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypesEnum.SET_IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
