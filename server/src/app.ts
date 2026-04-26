import express from "express"
import cors from "cors"
import morgan from "morgan"

// Routes
import holdingsRoutes from "./modules/holdings/holdings.route"
import ordersRoutes from "./modules/orders/orders.route"
import positionsRoutes from "./modules/positions/positions.route"

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


// Routes
const API = "/api/v1"

app.use(`${API}/holdings`, holdingsRoutes);
app.use(`${API}/orders`, ordersRoutes);
app.use(`${API}/positions`, positionsRoutes);

export default app