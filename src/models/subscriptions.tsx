import { Schema, models, model } from "mongoose";

const SubscriptionSchema = new Schema({
  name: {
    type: String,
    required: ["Subscription name is required", true],
  },
  amount: {
    type: Number,
    required: ["Subscription Amount is required", true],
  },
});

const Subscriptions =
  models.Subscriptions || model("Subscritions", SubscriptionSchema);
export default Subscriptions;
