'use server'
import { round2 } from '../utils'
import { FREE_SHIPPING_MIN_PRICE } from '../constants'
import { OrderItem } from '@/types'


export const calcDeliveryDateAndPrice = async ({
  items,
}: {
  deliveryDateIndex?: number
  items: OrderItem[]
 
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )


  const shippingPrice =
  
          itemsPrice >= FREE_SHIPPING_MIN_PRICE
        ? 0
        : 5

  const taxPrice = round2(
    itemsPrice *0.15)

  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0) +
      (taxPrice ? round2(taxPrice) : 0)
  )
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  }
}

// GET
// export async function getMyOrders({
//   limit,
//   page,
// }: {
//   limit?: number
//   page: number
// }) {
//   limit = limit || PAGE_SIZE
//   await connectToDatabase()
//   const session = await auth()
//   if (!session) {
//     throw new Error('User is not authenticated')
//   }
//   const skipAmount = (Number(page) - 1) * limit
//   const orders = await Order.find({
//     user: session?.user?.id,
//   })
//     .sort({ createdAt: 'desc' })
//     .skip(skipAmount)
//     .limit(limit)
//   const ordersCount = await Order.countDocuments({ user: session?.user?.id })

//   return {
//     data: JSON.parse(JSON.stringify(orders)),
//     totalPages: Math.ceil(ordersCount / limit),
//   }
// }