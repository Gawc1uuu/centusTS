import React, { useEffect } from "react";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import useExpensesContext from "../hooks/useExpensesContext";
import useAuthContext from "../hooks/useAuthContext";
import axios, { AxiosError } from "axios";

const Home = () => {
  const { expenses, dispatch } = useExpensesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/expenses", {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        });

        dispatch({ type: "SET_EXPENSES", payload: response.data });
      } catch (e) {
        console.log((e as AxiosError).response?.data);
      }
    };

    getExpenses();
  }, [user?.token, dispatch]);

  return (
    <div className="flex flex-col md:flex-row md:justify-around justify-center items-start">
      <ExpensesList expenses={expenses} />
      <ExpensesForm />
    </div>
  );
};

export default Home;
