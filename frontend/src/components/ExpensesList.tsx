import React from "react";
import deleteIcon from "../assets/trashcan.svg";

interface Expense {
  _id: string;
  name: string;
  amount: number;
  user_id: string;
  isIncome: boolean;
  createdAt: string;
}

interface IExpensesListProps {
  expenses?: Expense[];
}

const ExpensesList = ({ expenses }: IExpensesListProps) => {
  return (
    <div className="flex flex-col justify-start items-center w-full md:w-2/3 min-h-screen md:min-h-[500px] md:max-h-[500px] md:overflow-y-scroll order-2 md:order-1 md:mt-10 md:mx-36 space-y-6">
      {!expenses || (expenses.length === 0 && <p>no expenses to load</p>)}
      {expenses?.length !== 0 &&
        expenses?.map((expense) => (
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
            />
          </div>
        ))}
    </div>
  );
};

export default ExpensesList;
