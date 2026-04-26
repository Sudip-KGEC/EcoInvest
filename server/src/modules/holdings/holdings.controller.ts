import { Request, Response } from "express"
import * as HoldingsService from "./holdings.service"

export const createHolding = async (req: Request, res: Response) => {
  const result = await HoldingsService.createHolding(req.body)

  res.status(201).json({
    success: true,
    data: result,
  })
}

export const getAllHoldings = async (req: Request, res: Response) => {
  const result = await HoldingsService.getAllHoldings()

  res.status(200).json({
    success: true,
    data: result,
  })
}