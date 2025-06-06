"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollSmoother from "gsap/ScrollSmoother"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default function GsapWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  useGSAP(
    () => {
      if (wrapperRef.current && contentRef.current) {
        ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1,
          effects: true,
          smoothTouch: 0.1,
          speed: 1.5,
        })
      }
    },
    {
      scope: contentRef,
    }
  )

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  )
}
