import React, { useEffect } from "react";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import useExpensesContext from "../hooks/useExpensesContext";

const Home = () => {
  const { expenses, dispatch } = useExpensesContext();

  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
      <ExpensesList />
      <ExpensesForm />
    </div>
  );
};

export default Home;
