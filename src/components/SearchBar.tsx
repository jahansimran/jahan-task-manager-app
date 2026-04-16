import { useState } from "react";
import debounce from "lodash/debounce";

export default function SearchBar({ onSearch }: { onSearch: (v: string) => void }) {
  const [value, setValue] = useState("");

  const handleSearch = debounce(onSearch, 300);

  return (
    <div className="relative">
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BBB] dark:text-[#636366] w-4 h-4 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        className="w-full bg-white dark:bg-[#1C1C1E] border border-[#E8E6E1] dark:border-[#3A3A3C] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1A1A1A] dark:text-[#E5E5E7] placeholder-[#C0BDB7] dark:placeholder-[#636366] focus:outline-none focus:border-[#1A1A1A] dark:focus:border-[#E5E5E7] transition-colors shadow-sm dark:shadow-black/40"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}