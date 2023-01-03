import express from "express";
const app = express();
import mongoose, { MongooseError } from "mongoose";
import expensesRouter from "./routes/expensesRoutes";
import usersRouter from "./routes/usersRouter";
import cors from "cors";

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/expenseTrackerTS")
  .then(() =>
    app.listen(4000, () => {
      console.log("Conntected to database and listening on port 4000");
    })
  )
  .catch((e) => {
    console.log((e as MongooseError).message);
  });

//extending request interface

declare module "express" {
  export interface Request {
    user?: any;
  }
}

//cors middleware
app.use(cors());
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routers
app.use("/api/expenses", expensesRouter);
app.use("/api/users", usersRouter);
