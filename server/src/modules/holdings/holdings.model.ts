import { Schema, model } from "mongoose"
import { IHolding } from "./holdings.interface"

const holdingsSchema = new Schema<IHolding>({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, required: true },
  day: { type: String, required: true },
})

export const HoldingsModel = model<IHolding>("Holding", holdingsSchema)