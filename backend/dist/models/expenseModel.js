"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExpenseSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Expense = (0, mongoose_1.model)("Expense", ExpenseSchema);
exports.default = Expense;
