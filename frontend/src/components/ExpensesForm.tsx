import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import useAuthContext from "../hooks/useAuthContext";
import useExpensesContext from "../hooks/useExpensesContext";

const ExpensesForm = () => {
  const { dispatch } = useExpensesContext();
  const { user } = useAuthContext();
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  // const [isIncome, setIsIncome] = useState<string>("true");
  const [radioValue, setRadioValue] = useState<boolean>(true);

  const handleRadio = (parameter: string): void => {
    setRadioValue(parameter === "true" ? true : false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/expenses",
        {
          name,
          amount,
          isIncome: radioValue,
        },
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      dispatch({ type: "ADD_EXPENSE", payload: response.data });
    } catch (e) {
      console.log((e as AxiosError).response?.data);
    }

    setName("");
    setAmount(0);
  };

  return (
    <div className="flex flex-col items-center order-1 md:order-2 justify-center w-full md:w-1/3 mt-10">
      <form onSubmit={handleSubmit} className="max-w-[300px] w-11/12 sm:w-full">
        <div className="flex flex-col my-6">
          <label className="text-xl">Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name of the expense..?"
            required
            type="text"
            className="border  border-black py-2 px-2 focus:outline-none placeholder:text-light"
          />
        </div>
        <div className="flex flex-col my-6">
          <label className="text-xl">Amount: </label>
          <input
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="How much did you spend..?"
            value={amount}
            required
            type="number"
            className="border py-2 px-2 focus:outline-none placeholder:text-light "
          />
        </div>
        <div className="flex justify-between my-4">
          <p>
            <label>expense</label>
            <input
              onChange={(e) => handleRadio(e.target.value)}
              type="radio"
              name="boolean-parameter"
              value="false"
            />
          </p>
          <p>
            <label>income</label>
            <input
              onChange={(e) => handleRadio(e.target.value)}
              type="radio"
              name="boolean-parameter"
              value="true"
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
