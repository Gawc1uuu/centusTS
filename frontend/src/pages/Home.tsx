import React from "react";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
      <ExpensesList />
      <ExpensesForm />
    </div>
  );
};

export default Home;
