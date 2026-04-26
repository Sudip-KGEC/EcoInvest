import { Request, Response } from "express"
import * as OrdersService from "./orders.service"

export const createOrder = async (req: Request, res: Response) => {
  const result = await OrdersService.createOrder(req.body)

  res.status(201).json({
    success: true,
    message: "Order saved!",
    data: result,
  })
}