import { Request, Response } from "express"
import * as PositionsService from "./positions.service"

export const getAllPositions = async (req: Request, res: Response) => {
  const data = await PositionsService.getAllPositions()

  res.status(200).json({
    success: true,
    data,
  })
}

export const createPosition = async (req: Request, res: Response) => {
  const result = await PositionsService.createPosition(req.body)

  res.status(201).json({
    success: true,
    data: result,
  })
}