export default function HeroSkeleton() {
  return (
    <section className="flex flex-col justify-center items-start min-h-screen w-full px-6 sm:px-10 md:px-14 py-10 animate-pulse">
      <div className="w-1/3 h-4 bg-gray-700 rounded mb-4"></div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-28 mt-4 w-full">
        <div className="h-20 w-2xl bg-gray-700 rounded"></div>

        <div className="flex flex-wrap justify-between gap-4 md:gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-12 w-36 bg-gray-700 rounded-3xl" />
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-6 mt-10 w-full">
        <div className="space-y-3 max-w-2xl w-full">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-full"></div>
          ))}
        </div>
        <div className="h-20 w-2xl bg-gray-700 rounded" />
      </div>

      <div className="flex flex-wrap w-full justify-center gap-8 md:gap-16 mt-16 lg:mt-30">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-10 w-36 border bg-gray-700 rounded-full" />
        ))}
      </div>
    </section>
  )
}
