export function Tag({ text }: { text: string }) {
  return (
    <span className="py-2.5 px-6 bg-neutral-100 text-black font-sans font-medium text-sm text-center border-0 rounded-3xl">
      {text}
    </span>
  )
}
