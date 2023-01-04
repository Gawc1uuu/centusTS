import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import ExpensesContextProvider from "./context/ExpensesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ExpensesContextProvider>
        <App />
      </ExpensesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
