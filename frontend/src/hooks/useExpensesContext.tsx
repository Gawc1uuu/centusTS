import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

const useExpensesContext = () => {
  const context = useContext(ExpensesContext);

  return { ...context };
};

export default useExpensesContext;
