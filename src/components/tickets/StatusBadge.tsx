import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Status } from "../../types";

interface IProps {
  status: Status;
  onStatusChange: (newStatus: Status) => void;
}

const StatusBadge = ({ status, onStatusChange }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const statuses: Status[] = ["open", "pending", "resolved"];

  const statusStyles: Record<Status, string> = {
    open: "bg-blue-50 text-blue-600",
    pending: "bg-amber-50 text-amber-600",
    resolved: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusStyles[status]}`}
      >
        {status}
        {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-[calc(100%+4px)] z-50 min-w-32 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          {statuses.map((status) => (
            <li
              key={status}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
              onClick={() => {
                onStatusChange(status);
                setIsOpen(false);
              }}
            >
              {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusBadge;
