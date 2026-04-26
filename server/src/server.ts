import app from "./app";
import { connectDB } from "./config/db";
import env from "./config/env"




const PORT = env.PORT

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
    await connectDB()
})