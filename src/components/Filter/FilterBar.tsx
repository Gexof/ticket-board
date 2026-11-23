import type { Dispatch, SetStateAction } from "react";
import type { Ticket } from "../../interfaces";
import FilterButton from "./FilterButton";
import type { TicketFilter } from "../../types";

interface IProps {
  ticketsData: Ticket[];
  setFilter: Dispatch<SetStateAction<TicketFilter>>;
  filter: TicketFilter;
}

const FilterBar = ({ ticketsData, setFilter, filter }: IProps) => {
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
        <FilterButton
          label="All"
          count={ticketsData.length}
          isActive={filter === "all"}
          filterStatus="all"
          onHandleFilter={setFilter}
        />
        <FilterButton
          label="Open"
          count={openTickets}
          isActive={filter === "open"}
          filterStatus="open"
          onHandleFilter={setFilter}
        />
        <FilterButton
          label="Pending"
          count={pendingTickets}
          isActive={filter === "pending"}
          filterStatus="pending"
          onHandleFilter={setFilter}
        />
        <FilterButton
          label="Resolved"
          count={resolvedTickets}
          isActive={filter === "resolved"}
          filterStatus="resolved"
          onHandleFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default FilterBar;
