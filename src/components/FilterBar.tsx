import FilterButton from "./FilterButton";

interface IProps {}

const FilterBar = ({}: IProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <FilterButton label="All" count={6} isActive={true} />
        <FilterButton label="Open" count={3} isActive={false} />
        <FilterButton label="Pending" count={2} isActive={false} />
        <FilterButton label="Resolved" count={1} isActive={false} />
      </div>
    </div>
  );
};

export default FilterBar;
