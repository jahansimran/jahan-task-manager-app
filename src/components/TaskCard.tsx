import { useRouter } from "next/navigation";
import { Task } from "@/types/task";

export default function TaskCard({ task }: { task: Task }) {
  const router = useRouter();

  return (
    <div
    className="bg-white dark:bg-[#1C1C1E] border border-[#E8E6E1] dark:border-[#3A3A3C] rounded-xl px-5 py-4 shadow-sm dark:shadow-black/40 cursor-pointer hover:border-[#1A1A1A] dark:hover:border-[#E5E5E7] hover:shadow-md dark:hover:shadow-black/60 transition-all group"
    onClick={() => router.push(`/tasks/${task.id}`)}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3 min-w-0">
        {/* Status dot */}
        <span
          className={`mt-1 shrink-0 w-2.5 h-2.5 rounded-full ${
            task.completed ? "bg-[#4CAF50] dark:bg-[#34D058]" : "bg-[#E05C4B] dark:bg-[#FF6B5B]"
          }`}
        />
        <div className="min-w-0">
          <h3
            className={`text-sm font-semibold truncate capitalize ${
              task.completed
                ? "line-through text-[#999] dark:text-[#636366]"
                : "text-[#1A1A1A] dark:text-[#E5E5E7]"
            }`}
          >
            {task.title}
          </h3>
          <p className="text-xs text-[#AAA] dark:text-[#636366] mt-0.5">User: {task.userId}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            task.completed
              ? "bg-[#EAF7EA] dark:bg-[#34D058]/15 text-[#4CAF50] dark:text-[#34D058]"
              : "bg-[#FDF0EE] dark:bg-[#FF6B5B]/15 text-[#E05C4B] dark:text-[#FF6B5B]"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  </div>
  );
}