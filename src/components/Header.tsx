"use client"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavigationLinks from "./ui/NavigationLinks"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const sidebarRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: "top top",
      end: "+=5200",
      pin: true,
    })
  }, [])
  return (
    <header ref={sidebarRef} className="fixed left-0 top-0 w-32 h-0">
      <nav className="px-6 py-6">
        <div className="w-24 justify-start text-neutral-100 text-xl font-semibold font-mono">
          <h1>Jonatas</h1>
          <h1>Eduardo</h1>
        </div>
        <NavigationLinks />
      </nav>
    </header>
  )
}
