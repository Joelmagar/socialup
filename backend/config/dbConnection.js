import Mongoose from "mongoose";
const connectDb = async () => {
  try {
    const connect = await Mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "database connect: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDb;
