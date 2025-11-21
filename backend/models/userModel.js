import Mongoose from "mongoose";

const userSchema = Mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please  add the username"],
    },
    email: {
      type: String,
      required: [true, "please  add the email"],
      unique: [true, "email taken"],
    },
    password: {
      type: String,
      required: [true, "please  add the password"],
    },
    profile: {
      type: String,
    },
    friends: [{ type: Mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);
export default Mongoose.model("User", userSchema);
