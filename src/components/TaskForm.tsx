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
     <div className="bg-white border border-[#E8E6E1] rounded-xl p-4 shadow-sm space-y-3">
      <p className="text-xs font-semibold text-[#999] uppercase tracking-widest">New Task</p>
      <input
        className="w-full border border-[#E8E6E1] rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] placeholder-[#C0BDB7] focus:outline-none focus:border-[#1A1A1A] transition-colors"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      {error && (
        <p className="text-[#E05C4B] text-xs font-medium flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="bg-[#1A1A1A] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#333] active:scale-95 transition-all"
      >
        Add Task
      </button>
    </div>
  );
}