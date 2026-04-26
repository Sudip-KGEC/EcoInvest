import { Schema, model } from "mongoose"
import { IPosition } from "./positions.interface"

const positionsSchema = new Schema<IPosition>({
  product: { type: String, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, required: true },
  day: { type: String, required: true },
  isLoss: { type: Boolean, required: true },
})

export const PositionsModel = model<IPosition>("Position", positionsSchema)