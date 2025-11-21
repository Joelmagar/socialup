import Mongoose from "mongoose";

const MessageSchema = new Mongoose.Schema({
  sender: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  status: {
    type: String,
    enum: ["sent", "delivered", "read"],
    default: "sent",
  },
  timestamp: { type: Date, default: Date.now },
});

export default Mongoose.model("Chat", MessageSchema);
