import express, { Express } from "express";
const router = express.Router();
import { authMiddleware } from "../middleware/authMiddleware";

import {
  getAllExpenses,
  addExpense,
  getSingleExpense,
  deleteSingleExpense,
} from "../controllers/expensesControllers";

router.use(authMiddleware);

router.get("/", getAllExpenses);

router.post("/", addExpense);

router.get("/:id", getSingleExpense);

router.delete("/:id", deleteSingleExpense);

export default router;
