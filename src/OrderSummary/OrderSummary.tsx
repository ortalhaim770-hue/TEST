import type { JSX } from 'react'

export interface OrderSummaryProps {
  orderId: number
  totalPrice: number
  isPaid: boolean
}

export default function OrderSummary({
  orderId,
  totalPrice,
  isPaid,
}: OrderSummaryProps): JSX.Element {
  return (
    <section>
      <h2>Order Summary</h2>
      <p>Order ID: {orderId}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Payment Status: {isPaid ? 'Paid' : 'Unpaid'}</p>
    </section>
  )
}
