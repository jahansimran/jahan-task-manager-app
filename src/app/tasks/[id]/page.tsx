"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useParams, useRouter } from "next/navigation";
import SkeletonList from "@/components/SkeletonList";

export default function TaskDetail() {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const res = await api.get(`/todos/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <SkeletonList />;
  if (isError) return (
    <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center">
      <p className="text-[#E05C4B] text-sm font-medium">Failed to load task</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F6F3] dark:bg-[#111113]">

    {/* Header */}
    <header className="bg-white dark:bg-[#1C1C1E] border-b border-[#E8E6E1] dark:border-[#3A3A3C] sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F6F3] dark:hover:bg-[#2C2C2E] transition-colors text-[#666] dark:text-[#8E8E93] hover:text-[#1A1A1A] dark:hover:text-[#E5E5E7]"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-[#E5E5E7] tracking-tight">Task Detail</h1>
          <p className="text-xs text-[#999] dark:text-[#636366] mt-0.5">#{id}</p>
        </div>
      </div>
    </header>

    {/* Content */}
    <main className="max-w-2xl mx-auto px-6 py-6 space-y-4">

      {/* Status Banner */}
      <div
        className={`rounded-xl px-5 py-3 flex items-center gap-3 ${
          data.completed
            ? "bg-[#EAF7EA] dark:bg-[#34D058]/10 border border-[#C5E8C5] dark:border-[#34D058]/25"
            : "bg-[#FDF0EE] dark:bg-[#FF6B5B]/10 border border-[#F5CFC9] dark:border-[#FF6B5B]/25"
        }`}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            data.completed ? "bg-[#4CAF50] dark:bg-[#34D058]" : "bg-[#E05C4B] dark:bg-[#FF6B5B]"
          }`}
        />
        <span
          className={`text-sm font-semibold ${
            data.completed ? "text-[#4CAF50] dark:text-[#34D058]" : "text-[#E05C4B] dark:text-[#FF6B5B]"
          }`}
        >
          {data.completed ? "Completed" : "Pending"}
        </span>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-[#1C1C1E] border border-[#E8E6E1] dark:border-[#3A3A3C] rounded-xl shadow-sm dark:shadow-black/40 overflow-hidden">

        {/* Title Section */}
        <div className="px-5 py-5 border-b border-[#F0EEE9] dark:border-[#2C2C2E]">
          <p className="text-xs font-semibold text-[#999] dark:text-[#636366] uppercase tracking-widest mb-2">Title</p>
          <h2 className="text-lg font-semibold text-[#1A1A1A] dark:text-[#E5E5E7] leading-snug capitalize">{data.title}</h2>
        </div>

        {/* Meta Section */}
        <div className="px-5 py-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-[#999] dark:text-[#636366] uppercase tracking-widest mb-1">Task ID</p>
            <p className="text-sm text-[#1A1A1A] dark:text-[#E5E5E7] font-medium">#{data.id}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#999] dark:text-[#636366] uppercase tracking-widest mb-1">Assigned To</p>
            <p className="text-sm text-[#1A1A1A] dark:text-[#E5E5E7] font-medium">User {data.userId}</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="w-full bg-[#1A1A1A] dark:bg-[#E5E5E7] text-white dark:text-[#1C1C1E] text-sm font-medium py-3 rounded-xl hover:bg-[#333] dark:hover:bg-[#CFCFCF] active:scale-95 transition-all"
      >
        ← Back to Tasks
      </button>

    </main>
  </div>
  );
}