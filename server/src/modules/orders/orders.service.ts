import { OrdersModel } from "./orders.model"
import { IOrder } from "./orders.interface"
import { HoldingsModel } from "../holdings/holdings.model"

export const createOrder = async (payload: IOrder) => {
  const { name, qty, price, mode } = payload

  const order = await OrdersModel.create(payload)

  if (mode === "BUY") {
    const existing = await HoldingsModel.findOne({ name })

    if (existing) {
      existing.qty += qty
      existing.avg = (existing.avg + price) / 2
      existing.price = price
      await existing.save()
    } else {
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
      })
    }
  }

  if (mode === "SELL") {
    const existing = await HoldingsModel.findOne({ name })

    if (existing) {
      existing.qty -= qty
      existing.price = price

      if (existing.qty <= 0) {
        await HoldingsModel.deleteOne({ _id: existing._id })
      } else {
        await existing.save()
      }
    }
  }

  return order
}