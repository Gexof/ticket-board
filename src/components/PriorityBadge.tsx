import type { Priority } from "../types";

interface IProps {
  priority: Priority;
}

const priorityStyles: Record<Priority, { badge: string; dot: string }> = {
  high: {
    badge: "bg-rose-50 text-rose-600",
    dot: "bg-rose-500",
  },
  medium: {
    badge: "bg-amber-50 text-amber-600",
    dot: "bg-amber-500",
  },
  low: {
    badge: "bg-slate-100 text-slate-600",
    dot: "bg-slate-500",
  },
};

const PriorityBadge = ({ priority }: IProps) => {
  const styles = priorityStyles[priority];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${styles.badge}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {priority}
    </span>
  );
};

export default PriorityBadge;
