import React from "react";

const ExpensesForm = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-start items-start bg-white py-4 px-6 mt-12">
      <form className="max-w-[300px] w-11/12 sm:w-full">
        <div className="flex flex-col my-6">
          <label className="text-xl">Name: </label>
          <input required type="text" className="border  border-black py-2" />
        </div>
        <div className="flex flex-col my-6">
          <label className="text-xl">Amount: </label>
          <input
            required
            type="number"
            className="border border-black py-2  valid:border-green-500"
          />
        </div>
        <div className="flex justify-between my-4">
          <p>
            <label>expense</label>
            <input type="radio" name="boolean-parameter" value="true" />
          </p>
          <p>
            <label>income</label>
            <input
              type="radio"
              name="boolean-parameter"
              value="false"
              defaultChecked
            />
          </p>
        </div>
        <button className="rounded text-white bg-green-700 py-2 px-4 hover:bg-green-600">
          Add expense
        </button>
      </form>
    </div>
  );
};

export default ExpensesForm;
