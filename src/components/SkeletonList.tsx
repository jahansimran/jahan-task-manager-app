
export default function SkeletonList() {
  return (
      <div className="min-h-screen bg-[#F7F6F3]">
      <header className="bg-white border-b border-[#E8E6E1]">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="h-5 w-24 bg-[#E8E6E1] rounded-md animate-pulse" />
          <div className="h-3 w-16 bg-[#E8E6E1] rounded-md animate-pulse mt-2" />
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-6 space-y-4">
        <div className="h-11 bg-white rounded-xl border border-[#E8E6E1] animate-pulse" />
        <div className="flex gap-2">
          {[80, 96, 80].map((w, i) => (
            <div key={i} className={`h-8 w-${w} bg-white rounded-full border border-[#E8E6E1] animate-pulse`} />
          ))}
        </div>
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-white border border-[#E8E6E1] rounded-xl p-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E8E6E1]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-[#E8E6E1] rounded w-3/4" />
                  <div className="h-3 bg-[#E8E6E1] rounded w-1/4" />
                </div>
                <div className="h-5 w-16 bg-[#E8E6E1] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}