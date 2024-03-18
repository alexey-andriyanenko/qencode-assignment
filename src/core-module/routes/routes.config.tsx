import React from "react";

import Login from "src/auth-module/pages/login";
import ForgotPassword from "src/auth-module/pages/forgot-password";
import ResetPassword from "src/auth-module/pages/reset-password";
import Signup from "src/auth-module/pages/signup";
import Home from "../pages/home";

import { IRoute } from "./routes.types";

export const LOGIN_ROUTE: IRoute = {
  path: "/login",
  element: <Login />,
};

export const FORGOT_PASSWORD_ROUTE: IRoute = {
  path: "/login/forgot",
  element: <ForgotPassword />,
};

export const RESET_PASSWORD_ROUTE: IRoute = {
  path: "/login/reset",
  element: <ResetPassword />,
};

export const SIGNUP_ROUTE: IRoute = {
  path: "/signup",
  element: <Signup />,
};

export const HOME_ROUTE: IRoute = {
  path: "/",
  element: <Home />,
  isPrivate: true,
};

export const routes: IRoute[] = [
  LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  RESET_PASSWORD_ROUTE,
  SIGNUP_ROUTE,
  HOME_ROUTE,
];
