"use client";

import { useTasks } from "@/hooks/useTasks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import TaskCard from "@/components/TaskCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useState, useMemo } from "react";
import SkeletonList from "@/components/SkeletonList";
import TaskForm from "@/components/TaskForm";
import ThemeToggle from "@/components/ThemeToggle";

export default function TasksPage() {
  const { data, isLoading, isError } = useTasks();
  const localTasks = useSelector((state: RootState) => state.tasks.localTasks);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const mergedTasks = useMemo(() => {
    const apiTasks = data || [];
    return [...localTasks, ...apiTasks];
  }, [data, localTasks]);

  const filteredTasks = useMemo(() => {
    return mergedTasks
      .filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
      })
      .filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [mergedTasks, filter, search]);

  if (isLoading) return <SkeletonList />;
   if (isError) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F6F3]">
      <p className="text-[#E05C4B] font-medium tracking-wide">Failed to load tasks</p>
    </div>
  );

  return (
       <div className="min-h-screen bg-[#F7F6F3] dark:bg-[#111111] transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-[#1C1C1C] border-b border-[#E8E6E1] dark:border-[#2E2E2E] sticky top-0 z-10 transition-colors duration-200">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-[#F0F0F0] tracking-tight">My Tasks</h1>
            <p className="text-xs text-[#999] dark:text-[#666] mt-0.5">
              {filteredTasks.length} task{filteredTasks.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] dark:bg-white flex items-center justify-center text-white dark:text-[#1A1A1A] text-xs font-bold">
              J
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-6 space-y-5">
        <SearchBar onSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TaskForm />

        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-16 text-[#BBB] dark:text-[#444]">
              <p className="text-4xl mb-3">✓</p>
              <p className="text-sm font-medium">No tasks found</p>
            </div>
          ) : (
            filteredTasks.slice(0, 30).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}