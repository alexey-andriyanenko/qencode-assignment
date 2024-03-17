import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";

import { PrivateRoute } from "./private-route";

import { routes } from "./routes.config";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((props) => (
        <>
          {props.isPrivate ? (
            <Route
              key={props.path}
              path={props.path}
              element={<PrivateRoute> {props.element} </PrivateRoute>}
            />
          ) : (
            <Route key={props.path} {...props} />
          )}
        </>
      ))}
    </Routes>
  );
};
