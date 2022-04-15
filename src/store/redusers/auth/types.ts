import { IUser } from "../../../types/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum ActionTypesEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
  type: ActionTypesEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: ActionTypesEnum.SET_USER;
  payload: IUser;
}
export interface SetErrorAction {
  type: ActionTypesEnum.SET_ERROR;
  payload: string;
}
export interface SetLoadingAction {
  type: ActionTypesEnum.SET_IS_LOADING;
  payload: boolean;
}

export type AuthActions =
  | SetAuthAction
  | SetUserAction
  | SetErrorAction
  | SetLoadingAction;
