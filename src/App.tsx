import './App.css'
import type { JSX } from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import UserCard from './UserCard/UserCard'
import ProductCard from './ProductCard/ProductCard'
import ProfileCard from './ProfileCard/ProfileCard'
import LikeButton from './LikeButton/LikeButton'

export default function App(): JSX.Element {
  return (
    <main>
      <Header />
      <Content />
      <UserCard name="Dana" age={27} isOnline={true} />
      <UserCard name="Noam" age={34} isOnline={false} />
      <ProductCard name="Laptop" price={2999} isAvailable={true} />
      <ProductCard name="Wireless Mouse" price={149} isAvailable={false} />
      <ProfileCard username="dana_dev" email="dana@example.com" isActive={true} />
      <ProfileCard username="noam_writer" email="noam@example.com" isActive={false} />
      <LikeButton />
      <Footer />
    </main>
  )
}

