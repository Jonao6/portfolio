'use client'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import NavigationLinks from "../ui/NavigationLinks"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const sidebarRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
    })
  }, [])
  return (
    <header ref={sidebarRef} className="hidden md:block fixed left-0 top-0 w-32 h-0 z-50">
      <nav className="px-6 py-6 h-full">
        <NavigationLinks />
      </nav>
    </header>
  )
}
