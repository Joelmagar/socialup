import Mongoose from "mongoose";

const postSchema = Mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "User id required"],
      ref: "user",
    },
    photo: {
      type: String,
    },
    video: {
      type: String,
    },
    description: {
      type: String,
      required: false,
    },
    likes: [{ type: Mongoose.Schema.Types.ObjectId, ref: "user" }],
    comments: [
      {
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: "user" },
        text: { type: String, required: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);
export default Mongoose.model("Post", postSchema);
