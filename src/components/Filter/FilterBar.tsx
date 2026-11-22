import type { Ticket } from "../../interfaces";
import FilterButton from "./FilterButton";

interface IProps {
  ticketsData: Ticket[];
}

const FilterBar = ({ ticketsData }: IProps) => {
  const openTickets = ticketsData.filter(
    (ticket) => ticket.status === "open",
  ).length;

  const pendingTickets = ticketsData.filter(
    (ticket) => ticket.status === "pending",
  ).length;

  const resolvedTickets = ticketsData.filter(
    (ticket) => ticket.status === "resolved",
  ).length;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <FilterButton label="All" count={ticketsData.length} isActive={true} />
        <FilterButton label="Open" count={openTickets} isActive={false} />
        <FilterButton label="Pending" count={pendingTickets} isActive={false} />
        <FilterButton
          label="Resolved"
          count={resolvedTickets}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default FilterBar;
