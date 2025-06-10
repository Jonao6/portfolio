
export interface ProjectProps {
  project: {
    title: string
    content: string[]
    image: string
    url: string
    tags: string[]
    demo: string
  }
  isInverted: boolean
}

export interface ProjectImageProps {
  image: string
  title: string
  url: string
  demo: string
}