import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 50,
        },
        ease: "power2.inOut",
      })
    }
  }