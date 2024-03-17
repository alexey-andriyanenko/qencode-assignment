import React from "react";
import { IRoute } from "./routes.types";

import Auth from "src/auth-module/pages/auth";

export const AUTU_ROUTE: IRoute = {
  path: "/login",
  element: <Auth />,
};

export const routes: IRoute[] = [AUTU_ROUTE];
