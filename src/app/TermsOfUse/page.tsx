import { termsOfUse } from "@/data/ts/termOfUse"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col w-full py-[5%] px-[25%] space-y-8 ">
      <Link href="/" className="text-black font-bold text-center text-2xl font-mono bg-white py-4 px-10 border rounded-3xl transition-colors delay-75 duration-150 ease-in-out scale-105 hover:bg-neutral-200">
        Voltar
      </Link>
      <div className="border border-neutral-300 rounded-3xl p-20">
        <h1 className="font-sans text-3xl font-bold text-white w-full text-center mb-14">
          Termos de Uso
        </h1>
        {termsOfUse.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold font-sans mb-2 text-neutral-100">
              {section.titulo}
            </h2>
            <p className="text-base leading-relaxed text-gray-300 mb-4">
              {section.conteudo}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
