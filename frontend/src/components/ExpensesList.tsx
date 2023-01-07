import React from "react";

interface Expense {
  _id: string;
  name: string;
  amount: number;
  user_id: string;
  isIncome: boolean;
}

interface IExpensesListProps {
  expenses?: Expense[];
}

const ExpensesList = ({ expenses }: IExpensesListProps) => {
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen md:min-h-[500px] md:max-h-[600px] order-2 md:order-1">
      {!expenses || (expenses.length === 0 && <p>no expenses to load</p>)}
      {expenses?.length !== 0 && expenses?.map((expense) => <div>elo</div>)}
    </div>
  );
};

export default ExpensesList;
