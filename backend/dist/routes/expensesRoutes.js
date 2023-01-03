"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authMiddleware_1 = require("../middleware/authMiddleware");
const expensesControllers_1 = require("../controllers/expensesControllers");
router.use(authMiddleware_1.authMiddleware);
router.get("/", expensesControllers_1.getAllExpenses);
router.post("/", expensesControllers_1.addExpense);
router.get("/:id", expensesControllers_1.getSingleExpense);
router.delete("/:id", expensesControllers_1.deleteSingleExpense);
exports.default = router;
