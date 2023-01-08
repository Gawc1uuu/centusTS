import { Schema, model } from "mongoose";

interface Expense {
  name: string;
  amount: number;
  user_id: string;
  isIncome: boolean;
  createdAt: string;
  updatedAt: string;
}

const ExpenseSchema = new Schema<Expense>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    isIncome: {
      type: Boolean,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Expense = model<Expense>("Expense", ExpenseSchema);

export default Expense;
