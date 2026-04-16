type Props = {
  filter: string;
  setFilter: (val: string) => void;
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "completed", label: "Completed" },
  { key: "pending", label: "Pending" },
];

const ACTIVE_COLORS: Record<string, string> = {
  all: "bg-violet-500 dark:bg-violet-400 text-white dark:text-white border-violet-500 dark:border-violet-400",
  completed: "bg-emerald-500 dark:bg-emerald-400 text-white dark:text-white border-emerald-500 dark:border-emerald-400",
  pending: "bg-amber-400 dark:bg-amber-300 text-white dark:text-[#1A1A1A] border-amber-400 dark:border-amber-300",
};

export default function FilterBar({ filter, setFilter }: Props) {
  return (
    <div className="flex gap-2">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
            filter === f.key
              ? ACTIVE_COLORS[f.key]
              : "bg-white dark:bg-[#1C1C1E] text-[#666] dark:text-[#8E8E93] border-[#E8E6E1] dark:border-[#3A3A3C] hover:border-[#1A1A1A] dark:hover:border-[#E5E5E7] hover:text-[#1A1A1A] dark:hover:text-[#E5E5E7]"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}