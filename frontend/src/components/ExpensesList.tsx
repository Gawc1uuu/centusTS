import React, { useState } from "react";
import deleteIcon from "../assets/trashcan.svg";
import axios, { AxiosError } from "axios";
import useAuthContext from "../hooks/useAuthContext";
import useExpensesContext from "../hooks/useExpensesContext";
import Filters from "./Filters";

interface Expense {
  _id: string;
  name: string;
  amount: number;
  user_id: string;
  isIncome: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IExpensesListProps {
  expenses?: Expense[];
}

const ExpensesList = ({ expenses }: IExpensesListProps) => {
  const [filter, setFilter] = useState<string>("all");

  const { user } = useAuthContext();
  const { dispatch } = useExpensesContext();

  const getFilter = (f: string) => {
    setFilter(f);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        "http://localhost:4000/api/expenses/" + id,
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      dispatch({ type: "DELETE_EXPENSE", payload: response.data });
    } catch (e) {
      console.log((e as AxiosError).response?.data);
    }
  };

  const getNumberOfTheWeek = (date: Date): number => {
    date.setHours(0, 0, 0, 0);
    let currentDate = date;
    let startDate = new Date(currentDate.getFullYear(), 0, 4);
    let days = Math.floor(
      (currentDate.getMilliseconds() - startDate.getMilliseconds()) /
        (24 * 60 * 60 * 1000)
    );
    return Math.ceil((currentDate.getDay() + 1 + days) / 7);
  };

  const newExpenses = expenses
    ? expenses.filter((expense) => {
        switch (filter) {
          case "all":
            return true;
          case "this year":
            let isThisYear = false;
            let year = new Date().getFullYear();
            let expenseYear = new Date(expense.updatedAt).getFullYear();
            if (year === expenseYear) {
              isThisYear = true;
            }
            return isThisYear;
          case "this month":
            let isThisMonth = false;
            let month = new Date().getMonth();
            let expenseMonth = new Date(expense.updatedAt).getMonth();
            if (month === expenseMonth) {
              isThisMonth = true;
            }
            return isThisMonth;
          case "this week":
            let isThisWeek = false;
            let thisWeekNumber = getNumberOfTheWeek(new Date());
            let expenseWeekNumber = getNumberOfTheWeek(
              new Date(expense.updatedAt)
            );
            if (thisWeekNumber === expenseWeekNumber) {
              isThisWeek = true;
            }
            return isThisWeek;
          case "today":
            let isToday = false;
            let today = new Date().setHours(0, 0, 0, 0);
            let expenseDate = new Date(expense.updatedAt).setHours(0, 0, 0, 0);
            if (today === expenseDate) {
              isToday = true;
            }
            return isToday;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className="flex flex-col justify-start items-center w-full md:w-2/3 min-h-screen order-2 md:order-1 mt-10 md:mx-36 space-y-6 md:p-8 mt-">
      {newExpenses?.length !== 0 && (
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
          <Filters getFilter={getFilter} filter={filter} />
          <p className="font-semibold tracking-wide my-5">
            Total Balance: $
            {newExpenses?.reduce((acc, curr) => acc + curr.amount, 0)}
          </p>
        </div>
      )}

      {!newExpenses || (newExpenses.length === 0 && <p>no expenses to load</p>)}
      {newExpenses?.length !== 0 &&
        newExpenses?.map((expense) => (
          <div
            key={expense._id}
            className={`relative flex flex-col justify-center text-left border-l-8 ${
              expense.isIncome ? "border-green-600" : "border-red-600"
            } py-6 px-10 rounded-lg shadow-md w-full transition duration-200 hover:-translate-y-1 hover:shadow-xl bg-white group`}
          >
            <p>
              {expense.name}, ${expense.amount}
            </p>
            <p>{expense.createdAt}</p>
            <img
              src={deleteIcon.toString()}
              alt="trashcan"
              className="w-6 absolute right-5 top-3 hidden duration-200 group-hover:block transition-all invert-[50%] hover:invert-0 hover:cursor-pointer"
              onClick={(e) => handleDelete(expense._id)}
            />
          </div>
        ))}
    </div>
  );
};

export default ExpensesList;
