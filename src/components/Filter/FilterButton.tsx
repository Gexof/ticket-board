interface IProps {
  label: string;
  count: number;
  isActive?: boolean;
}

const FilterButton = ({ label, count, isActive = false }: IProps) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
        isActive
          ? "border-transparent bg-linear-to-r from-violet-600 to-indigo-500 text-white shadow-sm shadow-violet-500/20"
          : "border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-700"
      }`}
    >
      <span>{label}</span>

      <span
        className={`text-xs font-bold ${
          isActive ? "text-white/80" : "text-slate-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
};

export default FilterButton;
