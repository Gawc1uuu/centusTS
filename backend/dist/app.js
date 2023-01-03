"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const expensesRoutes_1 = __importDefault(require("./routes/expensesRoutes"));
const usersRouter_1 = __importDefault(require("./routes/usersRouter"));
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/expenseTrackerTS")
    .then(() => app.listen(4000, () => {
    console.log("Conntected to database and listening on port 4000");
}))
    .catch((e) => {
    console.log(e.message);
});
app.use((0, cors_1.default)());
//middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//routers
app.use("/api/expenses", expensesRoutes_1.default);
app.use("/api/users", usersRouter_1.default);
