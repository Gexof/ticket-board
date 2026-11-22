import type { Ticket } from "../interfaces";
import InitialsBadge from "./InitialsBadge";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

interface IProps {
  ticket: Ticket;
}

const TicketRow = ({ ticket }: IProps) => {
  return (
    <tr key={ticket.id} className="transition-colors hover:bg-slate-50/80">
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-400">
        #{ticket.id}
      </td>

      <td className="min-w-64 px-6 py-4">
        <p className="text-sm font-semibold text-slate-800">{ticket.title}</p>
        <p className="mt-1 text-xs text-slate-400">
          Updated {new Date(ticket.updatedAt).toLocaleString()}
        </p>
      </td>

      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-600">
        <span className="flex justify-start items-center gap-2">
          <InitialsBadge name={ticket.customer} />
          {ticket.customer}
        </span>
      </td>

      <td className="px-6 py-4">
        <PriorityBadge priority={ticket.priority} />
      </td>

      <td className="px-6 py-4">
        <StatusBadge status={ticket.status} />
      </td>
    </tr>
  );
};

export default TicketRow;
