export default function LoadingBlog() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-2xl border border-[#259A9E]/20 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8">
          <div className="h-9 w-64 bg-gray-200 rounded animate-pulse" />
          <div className="mt-3 h-4 w-96 max-w-full bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-[#259A9E]/10 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)]"
            >
              <div className="aspect-[16/9] bg-gray-200 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="pt-2 flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-9 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

