
import { User } from 'lucide-react'
import Image from 'next/image'

 export type ImageProps = {
  image?: string
  username: string
}

export function UserAvatar({ image, username }: ImageProps) {
  if (image) {
    return (
      <Image
        src={image}
        alt={username}
        width={10}
        height={10}
        className="h-10 w-10 rounded-full object-cover"
      />
    )
  }

  return (
    <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
      <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    </div>
  )
}
