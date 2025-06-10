import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import { Suspense } from "react"
import "./globals.css"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Jonatas Eduardo | Desenvolvedor Fullstack",
  description:
    "Portfólio de Jonatas Eduardo — desenvolvedor fullstack com foco em aplicações web modernas, escaláveis e com ótima experiência de usuário.",
  keywords: [
    "Jonatas Eduardo",
    "Desenvolvedor Fullstack",
    "Portfólio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Desenvolvimento Web",
    "API REST",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Jonatas Eduardo" }],
  creator: "Jonatas Eduardo",
  openGraph: {
    title: "Jonatas Eduardo | Desenvolvedor Fullstack",
    description:
      "Conheça o portfólio de Jonatas Eduardo — Desenvolvedor Fullstack especializado em tecnologias modernas como React, Next.js e Node.js.",
    siteName: "Portfólio de Jonatas Eduardo",
    type: "website",
    locale: "pt_BR",
  },
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jet-brains-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrains_Mono.variable}`}>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
