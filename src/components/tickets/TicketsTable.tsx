import type { Dispatch, SetStateAction } from "react";
import type { Ticket } from "../../interfaces";
import type { Status } from "../../types";
import TicketRow from "./TicketRow";

interface IProps {
  ticketsData: Ticket[];
  setTicketsData: Dispatch<SetStateAction<Ticket[]>>;
}

const TicketsTable = ({ ticketsData, setTicketsData }: IProps) => {
  const handleStatusChange = (ticketId: number, newStatus: Status) => {
    setTicketsData((currTicket) =>
      currTicket.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: newStatus,
              updatedAt: new Date().toLocaleString(),
            }
          : ticket,
      ),
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-200 bg-slate-50/80">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                ID
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Ticket
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Customer
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Priority
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {ticketsData.map((ticket) => (
              <TicketRow
                key={ticket.id}
                ticket={ticket}
                onStatusChange={(newStatus) => {
                  handleStatusChange(ticket.id, newStatus);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsTable;
