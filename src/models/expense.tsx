import { Schema, models, model } from "mongoose";

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: ["Expense is required", true],
  },
  amount: {
    type: Number,
    required: ["Amount is required", true],
  },
  dateOfTransaction: {
    type: Date,
    required: ["Date of Transaction is required", true],
  },
  type: {
    type: String,
  },
  tag: {
    type: Schema.Types.ObjectId,
    ref: "Tags",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Expense = models.Expense || model("Expense", ExpenseSchema);
export default Expense;
