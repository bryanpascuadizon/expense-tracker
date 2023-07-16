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
  dateOfTransction: {
    type: Date,
    required: ["Date of Transaction is required", true],
  },
  type: {
    type: Schema.Types.ObjectId,
  },
  tag: {
    type: Schema.Types.ObjectId,
  },
});

const Expense = models.Expense || model("Expense", ExpenseSchema);
export default Expense;
