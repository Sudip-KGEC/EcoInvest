import { HoldingsModel } from "./holdings.model"
import { IHolding } from "./holdings.interface"

export const createHolding = async (payload: IHolding) => {
  return await HoldingsModel.create(payload)
}

export const getAllHoldings = async () => {
  return await HoldingsModel.find({})
}