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
  },
});

const Tags = models.Tags || model("Tags", TagSchema);
export default Tags;
