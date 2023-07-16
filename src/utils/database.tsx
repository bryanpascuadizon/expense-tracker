import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const mongoURI: string = process.env.MONGODB_URI
      ? process.env.MONGODB_URI
      : "";
    await mongoose.connect(mongoURI, {
      dbName: "db_expensetracker",
    });
  } catch (error) {
    throw new Error(`MongoDB Server Error: ${error}`);
  }
};
