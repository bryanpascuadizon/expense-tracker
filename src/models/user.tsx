import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: ["Username is required", true],
  },
  password: {
    type: String,
    required: ["Password is required", true],
  },
  given_name: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
