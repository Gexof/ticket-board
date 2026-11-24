import { useState } from "react";
import { ArrowDownWideNarrow, ChevronDown, Check } from "lucide-react";
import type { SortOption } from "../../types";

interface IProps {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
}

const FilterList = ({ sortBy, setSortBy }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Priority", value: "priority" },
    { label: "Recently Updated", value: "recently-updated" },
    { label: "Oldest Updated", value: "oldest-updated" },
  ];

  const selectedLabel = options.find(
    (option) => option.value === sortBy,
  )?.label;

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm"
      >
        <ArrowDownWideNarrow size={16} className="text-slate-500" />

        <span className="text-slate-500">Sort by</span>

        <span className="font-semibold text-slate-700">{selectedLabel}</span>

        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute right-0 top-[calc(100%+8px)] z-50 w-48 rounded-xl border border-slate-200 bg-white p-1.5">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  setSortBy(option.value as SortOption);
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600"
              >
                <span>{option.label}</span>

                {sortBy === option.value && (
                  <Check size={15} className="text-violet-600" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterList;
