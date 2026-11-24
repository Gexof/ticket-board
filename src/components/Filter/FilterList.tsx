import { ArrowDownWideNarrow } from "lucide-react";

interface IProps {}

const FilterList = ({}: IProps) => {
  return (
    <div>
      <ArrowDownWideNarrow />
      <span className="text-slate-300">Sort by</span>
      <span>Priority</span>
    </div>
  );
};

export default FilterList;
