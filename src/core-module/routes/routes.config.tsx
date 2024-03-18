import React from "react";
import { IRoute } from "./routes.types";

import Auth from "src/auth-module/pages/auth";
import LoginForgot from "src/auth-module/pages/login-forgot";

export const LOGIN_ROUTE: IRoute = {
  path: "/login",
  element: <Auth />,
};

export const LOGIN_FORGOT_ROUTE: IRoute = {
  path: "/login/forgot",
  element: <LoginForgot />,
};

export const routes: IRoute[] = [LOGIN_ROUTE, LOGIN_FORGOT_ROUTE];
