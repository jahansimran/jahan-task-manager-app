type Props = {
  filter: string;
  setFilter: (val: string) => void;
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "completed", label: "Completed" },
  { key: "pending", label: "Pending" },
];

export default function FilterBar({ filter, setFilter }: Props) {
  return (
      <div className="flex gap-2">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
            filter === f.key
              ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
              : "bg-white text-[#666] border-[#E8E6E1] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}