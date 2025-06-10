"use client"
import Link from "next/link"
import { scrollToSection } from "@/lib/scrollToSection"

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 px-4 sm:px-8 md:px-20 py-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          href="#home"
          className="text-neutral-100 text-sm md:text-base font-semibold font-mono whitespace-nowrap hover:text-gray-300"
          onClick={(e) => scrollToSection(e, "home")}
        >
          Jonatas Eduardo
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-xs font-mono text-gray-400">
          <span className="order-2 sm:order-1">
            ©2025 Jonatas Eduardo. All rights reserved
          </span>
          <div className="flex order-1 sm:order-2 gap-4 sm:gap-6 md:gap-8">
            <Link
              href="/TermsOfUse"
              className="hover:text-neutral-100 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/PrivacyPolicy"
              className="hover:text-neutral-100 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
