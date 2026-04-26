import dotenv from "dotenv"
dotenv.config()

// console.log(process.env.PORT, process.env.MONGO_URL)

const env = {
  PORT: process.env.PORT || "3002",
  MONGO_URL: process.env.MONGO_URL as string,
}

export default env