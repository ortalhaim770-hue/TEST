import type { JSX } from 'react'

export interface ProductCardProps {
  name: string
  price: number
  isAvailable: boolean
}

export default function ProductCard({ name, price, isAvailable }: ProductCardProps): JSX.Element {
  return (
    <section>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{isAvailable ? 'Available' : 'Not available'}</p>
    </section>
  )
}