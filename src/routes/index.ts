import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}

export enum RoutesName {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutesName.LOGIN,
    element: Login,
    exact: true,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutesName.EVENT,
    element: Event,
    exact: true,
  },
];
