import React from "react";

const ExpensesList = () => {
  return (
    <div className="bg-gray-300 order-2 md:order-2 w-full col-span-2 ml-16">
      <div className="w-4/5 flex flex-col max-h-[500px] items-center overflow-y-auto">
        <h1 className="font-bolt font-sans text-2xl my-8 text-left">
          Expenses List:
        </h1>
        <div className="shadow-lg border-l-8 rounded-lg border-green-700 font-mono px-5 py-4 my-4 w-3/4 ">
          <h3 className="text-lg font-mono font-semibold leading-tight-wide">
            Name of an expense, 3$
          </h3>
          <p className="text-gray-400 text-bd">date of an expense</p>
        </div>
        <div className="shadow-lg border-l-8 rounded-lg border-red-700 font-mono px-5 py-4 my-4 w-3/4 ">
          <h3 className="text-lg font-mono font-semibold leading-tight-wide">
            Name of an expense, 3$
          </h3>
          <p className="text-gray-400 text-bd">date of an expense</p>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
