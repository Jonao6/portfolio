import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: "Jonatas Eduardo | Desenvolvedor Fullstack",
  description: "Portfólio de Jonatas Eduardo — desenvolvedor fullstack com foco em aplicações web modernas, escaláveis e com ótima experiência de usuário.",
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
    "Backend"
  ],
  authors: [{ name: "Jonatas Eduardo" }],
  creator: "Jonatas Eduardo",
  openGraph: {
    title: "Jonatas Eduardo | Desenvolvedor Fullstack",
    description: "Conheça o portfólio de Jonatas Eduardo — desenvolvedor fullstack especializado em tecnologias modernas como React, Next.js e Node.js.",
    siteName: "Portfólio de Jonatass Eduardo",
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
        {children}
      </body>
    </html>
  )
}
