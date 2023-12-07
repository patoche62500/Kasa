import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./components/route";
import "./styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Composant Route */}
    <Route />
  </React.StrictMode>
);
