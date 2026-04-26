import { Schema, model } from "mongoose"
import { IOrder } from "./orders.interface"

const ordersSchema = new Schema<IOrder>({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, required: true },
})

export const OrdersModel = model<IOrder>("Order", ordersSchema)