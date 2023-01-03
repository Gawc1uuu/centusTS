import React from "react";

const ExpensesForm = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-start items-end">
      <form>
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Amount: </label>
          <input type="number" />
        </div>
        <div>
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
        <button>Add expense</button>
      </form>
    </div>
  );
};

export default ExpensesForm;
