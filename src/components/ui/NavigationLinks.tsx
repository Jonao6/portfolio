import styles from "@/styles/navigation.module.css"
import Link from "next/link"

type NavigationLinksProps = {
  flex?: "row" | "col"
}

export default function NavigationLinks({
  flex = "col",
}: NavigationLinksProps) {
  return (
    <div
      className={`w-full h-full flex flex-${flex} ${
        flex === "col" ? "justify-start" : "justify-end"
      } mt-20 text-gray-300 gap-4 text-sm font-sans font-light`}
    >
      <Link href="#" className={`${styles.link} text-white`}>
        Sobre
      </Link>
      <Link href="#" className={`${styles.link} text-white`}>
        Projetos
      </Link>
      <Link href="#" className={`${styles.link} text-white`}>
        Contato
      </Link>
    </div>
  )
}
