import { PositionsModel } from "./positions.model"
import { IPosition } from "./positions.interface"

export const getAllPositions = async () => {
  return await PositionsModel.find({})
}

export const createPosition = async (payload: IPosition) => {
  return await PositionsModel.create(payload)
}