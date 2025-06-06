import Link from "next/link"
export default function Footer() {
  return (
    <footer className="min-w-screen border-t-2 border-neutral-100 px-20 py-2">
      <div className="flex flex-row justify-between items-center not-last:w-full mb-3">
        <div className="w-36 justify-start text-neutral-100 text-base font-semibold font-mono">
          <h1 className="w-xl">Jonatas Eduardo</h1>
        </div>
      </div>
      <div className="flex flex-row justify-end font-mono text-xs tracking-widest text-gray gap-12">
        <h1>©2025 Jonatas Eduardo. All rights reserved</h1>
        <Link href={"/TermsOfUse"}>Terms of Use</Link>
        <Link href={"/PrivacyPolicy"}>Privacy Policy</Link>
      </div>
    </footer>
  )
}
