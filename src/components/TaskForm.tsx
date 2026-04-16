"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/tasksSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || title.length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    dispatch(
      addTask({
        id: Date.now(),
        title,
        completed: false,
        userId: 1,
        isLocal: true,
      })
    );

    setTitle("");
    setError("");
  };

  return (
    <div className="bg-white dark:bg-[#1C1C1E] border border-[#E8E6E1] dark:border-[#3A3A3C] rounded-xl p-4 shadow-sm dark:shadow-black/40 space-y-3">
      <p className="text-xs font-semibold text-[#999] dark:text-[#636366] uppercase tracking-widest">New Task</p>
      <input
        className="w-full bg-white dark:bg-[#2C2C2E] border border-[#E8E6E1] dark:border-[#3A3A3C] rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] dark:text-[#E5E5E7] placeholder-[#C0BDB7] dark:placeholder-[#636366] focus:outline-none focus:border-[#1A1A1A] dark:focus:border-[#E5E5E7] transition-colors"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      {error && (
        <p className="text-[#E05C4B] dark:text-[#FF6B5B] text-xs font-medium flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="bg-[#1A1A1A] dark:bg-[#6868f0] text-white dark:text-[#1C1C1E] text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#333] dark:hover:bg-[#CFCFCF] active:scale-95 transition-all"
      >
        Add Task
      </button>
    </div>
  );
}