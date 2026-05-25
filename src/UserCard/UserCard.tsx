import type { JSX } from 'react'

export interface UserCardProps {
  name: string
  age: number
  isOnline: boolean
}

export default function UserCard({ name, age, isOnline }: UserCardProps): JSX.Element {
  return (
    <section>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </section>
  )
}