"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { BsArrowUpRightCircleFill } from "react-icons/bs"
import { FaSquareGithub } from "react-icons/fa6"

interface ImageProps {
  image: string
  title: string
  url: string
  demo: string
}

export default function ImageHover({ image, title, url, demo }: ImageProps) {
  const router = useRouter()
  return (
    <div className="relative group w-full max-h-full overflow-hidden rounded-lg">
      <Image
        alt={title}
        src={image}
        width={700}
        height={450}
        className="rounded-3xl w-full h-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-10">
        <button
          className="bg-transparent text-white rounded hover:scale-125 transition cursor-pointer"
          onClick={() => router.push(url)}
        >
          <FaSquareGithub className="h-16 w-16" />
        </button>
        <button
          className="bg-transparent text-white rounded hover:scale-125 transition cursor-pointer"
          onClick={() => router.push(demo)}
        >
          <BsArrowUpRightCircleFill className="h-16 w-16" />
        </button>
      </div>
    </div>
  )
}
