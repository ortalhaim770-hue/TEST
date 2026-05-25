import type { JSX } from 'react'

export interface ProfileCardProps {
  username: string
  email: string
  isActive: boolean
}

export default function ProfileCard({
  username,
  email,
  isActive,
}: ProfileCardProps): JSX.Element {
  return (
    <section>
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </section>
  )
}