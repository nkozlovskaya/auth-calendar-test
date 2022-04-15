import { AppDispatch } from "./../../index";
import { IUser } from "../../../types/IUser";
import {
  SetUserAction,
  ActionTypesEnum,
  SetAuthAction,
  SetLoadingAction,
  SetErrorAction,
} from "./types";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: ActionTypesEnum.SET_USER,
    payload: user,
  }),
  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: ActionTypesEnum.SET_AUTH,
    payload: isAuth,
  }),
  setIsLoading: (isLoading: boolean): SetLoadingAction => ({
    type: ActionTypesEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: ActionTypesEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>("./users.json");
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(
              AuthActionCreators.setError("Некорректный логин или пароль")
            );
          }
          dispatch(AuthActionCreators.setIsLoading(true));
        }, 1000);
      } catch (e) {
        AuthActionCreators.setError("Произошла ошибка при логине");
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setAuth(false));
  },
};
