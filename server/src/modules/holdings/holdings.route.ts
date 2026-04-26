import { Router } from "express"
import * as HoldingsController from "./holdings.controller"

const router = Router()

router.get("/", HoldingsController.getAllHoldings)
router.post("/", HoldingsController.createHolding)

export default router