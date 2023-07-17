import { Schema, models, model } from "mongoose";

const TagSchema = new Schema({
  name: {
    type: String,
    required: ["Tag name is required", true],
  },
  color: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
});

const Tags = models.Tags || model("Tags", TagSchema);
export default Tags;
