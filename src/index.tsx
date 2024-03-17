import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/fonts.css";
import "./index.css";

import { App } from "./core-module/app";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
