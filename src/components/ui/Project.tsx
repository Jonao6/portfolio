import { Tag } from "./Tag"
import ImageHover from "./ImageHover"

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

export default function Project({ project, isInverted }: ProjectProps) {
  const { title, content, image, url, demo, tags } = project

  return (
    <div
      className={`flex ${
        isInverted
          ? "flex-col-reverse md:flex-row-reverse"
          : " flex-col md:flex-row"
      } justify-between gap-40 mb-10`}
    >
      <ImageHover image={image} title={title} demo={demo} url={url} />
      <div className="flex flex-col items-center justify-between px-2.5 w-fit gap-2.5 text-justify">
        <div className="text-gray-300 text-sm font-sans font-normal leading-7">
          <h2
            className={`text-white text-lg font-sans font-bold ${
              isInverted ? "text-left" : "text-right"
            } w-full mb-10`}
          >
            {title}
          </h2>

          {content.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="w-full flex flex-wrap gap-5 items-end mt-3">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
