import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ DB Connected");
  } catch (error) {
    console.log("❌ REAL DB ERROR:");
    console.log(error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDb;