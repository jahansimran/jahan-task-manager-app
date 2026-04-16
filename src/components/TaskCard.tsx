import { useRouter } from "next/navigation";
import { Task } from "@/types/task";
import { useDispatch } from "react-redux";

export default function TaskCard({ task }: { task: Task }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
     <div
      className="bg-white border border-[#E8E6E1] rounded-xl px-5 py-4 shadow-sm cursor-pointer hover:border-[#1A1A1A] hover:shadow-md transition-all group"
      onClick={() => router.push(`/tasks/${task.id}`)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          {/* Status dot */}
          <span
            className={`mt-1 shrink-0 w-2.5 h-2.5 rounded-full ${
              task.completed ? "bg-[#4CAF50]" : "bg-[#E05C4B]"
            }`}
          />
          <div className="min-w-0">
            <h3 className={`text-sm font-semibold truncate capitalize ${task.completed ? "line-through text-[#999]" : "text-[#1A1A1A]"}`}>
              {task.title}
            </h3>
            <p className="text-xs text-[#AAA] mt-0.5">User: {task.userId}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
              task.completed
                ? "bg-[#EAF7EA] text-[#4CAF50]"
                : "bg-[#FDF0EE] text-[#E05C4B]"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
}