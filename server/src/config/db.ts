import mongoose from "mongoose"
import env from "./env"

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URL)
    console.log("MongoDB Connected..")
  } catch (error) {
    console.error("DB Error:", error)
    process.exit(1)
  }
}