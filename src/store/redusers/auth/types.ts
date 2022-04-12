export interface AuthState {
  isAuth: boolean;
}

export enum ActionTypesEnum {
  SET_AUTH = "SET_AUTH",
}

export interface SetAuthAction {
  type: ActionTypesEnum.SET_AUTH;
  payload: boolean;
}
export type AuthActions = SetAuthAction;
