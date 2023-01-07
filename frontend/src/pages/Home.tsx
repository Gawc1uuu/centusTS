import React, { useEffect } from "react";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import useExpensesContext from "../hooks/useExpensesContext";

const Home = () => {
  const { expenses, dispatch } = useExpensesContext();

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-around justify-center items-start">
      <ExpensesList />
      <ExpensesForm />
    </div>
  );
};

export default Home;
