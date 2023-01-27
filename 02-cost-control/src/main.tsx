import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { CostControlApp } from "./CostControlApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CostControlApp />
  </React.StrictMode>
);
