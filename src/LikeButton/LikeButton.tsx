import { useState, type JSX } from 'react'

export default function LikeButton(): JSX.Element {
  const [likes, setLikes] = useState<number>(0)

  return (
    <div>
      <button type="button" onClick={() => setLikes((prevLikes) => prevLikes + 1)}>
        ♥ Like
      </button>
      <span> {likes}</span>
    </div>
  )
}