import React, { createContext, useReducer } from "react";

interface Expense {
  _id: string;
  name: string;
  amount: number;
  user_id: string;
  isIncome: boolean;
}

interface IExpensesContext {
  expenses: Expense[];
  dispatch?: any;
}

interface StateInterface {
  expenses: Expense[];
}
interface ActionInterface {
  type: "SET_EXPENSES" | "DELETE_EXPENSE" | "ADD_EXPENSE";
  payload: any;
}

export const ExpensesContext = createContext<IExpensesContext | null>(null);

interface ExpensesContextProviderProps {
  children: React.ReactNode;
}

const expensesReducer = (
  state: StateInterface,
  action: ActionInterface
): any => {
  switch (action.type) {
    case "SET_EXPENSES":
      return { expenses: action.payload };
    case "ADD_EXPENSE":
      return { expenses: [...state.expenses, action.payload] };
    case "DELETE_EXPENSE":
      return {
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.payload._id
        ),
      };
  }
};

const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  const [state, dispatch] = useReducer(expensesReducer, { expenses: null });

  console.log(state);

  return (
    <ExpensesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
