import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "../routes";

export const App = observer(() => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
});
