"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleExpense = exports.getSingleExpense = exports.addExpense = exports.getAllExpenses = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//importing expense model
const expenseModel_1 = __importDefault(require("../models/expenseModel"));
const getAllExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.user._id;
    try {
        const allExpenses = yield expenseModel_1.default.find({ user_id }).sort({ createdAt: -1 });
        return res.status(200).json(allExpenses);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.getAllExpenses = getAllExpenses;
const addExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, amount, isIncome } = req.body;
    try {
        const user_id = req.user._id;
        const addedExpense = {
            name,
            amount: isIncome === true
                ? Math.abs(parseInt(amount))
                : -Math.abs(parseInt(amount)),
            isIncome,
            user_id,
        };
        const newExpense = yield expenseModel_1.default.create(addedExpense);
        return res.status(200).json(newExpense);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.addExpense = addExpense;
const getSingleExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.isValidObjectId(id)) {
        return res.status(404).json({ msg: "cannot find that item" });
    }
    try {
        const expense = yield expenseModel_1.default.findById(id);
        if (!expense) {
            res.status(404).json({ error: "item not found" });
        }
        return res.status(200).json(expense);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.getSingleExpense = getSingleExpense;
const deleteSingleExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.isValidObjectId(id)) {
        return res.status(404).json({ msg: "cannot find that item" });
    }
    try {
        const expense = yield expenseModel_1.default.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).json({ error: "item not found" });
        }
        return res.status(200).json(expense);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.deleteSingleExpense = deleteSingleExpense;
