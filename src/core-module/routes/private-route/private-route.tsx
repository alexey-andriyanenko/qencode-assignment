import React from "react";
import { Navigate } from "react-router";
import { observer } from "mobx-react-lite";

import { useAuthStore } from "src/auth-module/store";

import { LOGIN_ROUTE } from "../routes.config";

export interface IPrivateRouteProps {
  children: React.ReactNode;
}
export const PrivateRoute: React.FC<IPrivateRouteProps> = observer(({ children }) => {
  const authStore = useAuthStore();

  if (!authStore.isLogged) return <Navigate to={LOGIN_ROUTE.path} />;
  return <>{children}</>;
});
