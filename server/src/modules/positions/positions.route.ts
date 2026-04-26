import { Router } from "express"
import * as PositionsController from "./positions.controller"

const router = Router()

router.get("/", PositionsController.getAllPositions)
router.post("/", PositionsController.createPosition)

export default router