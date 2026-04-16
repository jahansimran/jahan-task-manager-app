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
      <div className="min-h-screen bg-[#F7F6F3]">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F6F3] transition-colors text-[#666] hover:text-[#1A1A1A]"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#1A1A1A] tracking-tight">Task Detail</h1>
            <p className="text-xs text-[#999] mt-0.5">#{id}</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-6 space-y-4">

        {/* Status Banner */}
        <div
          className={`rounded-xl px-5 py-3 flex items-center gap-3 ${
            data.completed
              ? "bg-[#EAF7EA] border border-[#C5E8C5]"
              : "bg-[#FDF0EE] border border-[#F5CFC9]"
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
              data.completed ? "bg-[#4CAF50]" : "bg-[#E05C4B]"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              data.completed ? "text-[#4CAF50]" : "text-[#E05C4B]"
            }`}
          >
            {data.completed ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-[#E8E6E1] rounded-xl shadow-sm overflow-hidden">

          {/* Title Section */}
          <div className="px-5 py-5 border-b border-[#F0EEE9]">
            <p className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">Title</p>
            <h2 className="text-lg font-semibold text-[#1A1A1A] leading-snug capitalize">{data.title}</h2>
          </div>

          {/* Meta Section */}
          <div className="px-5 py-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-1">Task ID</p>
              <p className="text-sm text-[#1A1A1A] font-medium">#{data.id}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-1">Assigned To</p>
              <p className="text-sm text-[#1A1A1A] font-medium">User {data.userId}</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="w-full bg-[#1A1A1A] text-white text-sm font-medium py-3 rounded-xl hover:bg-[#333] active:scale-95 transition-all"
        >
          ← Back to Tasks
        </button>

      </main>
    </div>
  );
}