import type { Status } from "../types";

interface IProps {
  status: Status;
}

const StatusBadge = ({ status }: IProps) => {
  const statuStyles: Record<Status, string> = {
    open: "bg-blue-50 text-blue-600",
    pending: "bg-amber-50 text-amber-600",
    resolved: "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statuStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
