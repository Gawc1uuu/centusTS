import mongoose from "mongoose";
import { Request, Response } from "express";
//importing expense model
import Expense from "../models/expenseModel";

export const getAllExpenses = async (req: Request, res: Response) => {
  const user_id = req.user._id;

  try {
    const allExpenses = await Expense.find({ user_id }).sort({ createdAt: -1 });
    return res.status(200).json(allExpenses);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};

export const addExpense = async (req: Request, res: Response) => {
  const { name, amount, isIncome } = req.body;

  try {
    const user_id = req.user._id;
    const addedExpense = {
      name,
      amount:
        isIncome === true
          ? Math.abs(parseInt(amount))
          : -Math.abs(parseInt(amount)),
      isIncome,
      user_id,
    };
    const newExpense = await Expense.create(addedExpense);
    return res.status(200).json(newExpense);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};

export const getSingleExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ msg: "cannot find that item" });
  }
  try {
    const expense = await Expense.findById(id);
    if (!expense) {
      res.status(404).json({ error: "item not found" });
    }
    return res.status(200).json(expense);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};
export const deleteSingleExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ msg: "cannot find that item" });
  }
  try {
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
      return res.status(404).json({ error: "item not found" });
    }
    return res.status(200).json(expense);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};
