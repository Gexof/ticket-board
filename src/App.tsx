import { useState } from "react";
import FilterBar from "./components/Filter/FilterBar";
import Header from "./components/Header";
import TicketsTable from "./components/tickets/TicketsTable";
import { tickets as initialTickets } from "./data";
import type { TicketFilter } from "./types";

function App() {
  const [ticketsData, setTicketsData] = useState(initialTickets);
  const [filter, setFilter] = useState<TicketFilter>("all");

  const filteredData =
    filter === "all"
      ? ticketsData
      : ticketsData.filter((ticket) => ticket.status === filter);

  const ticketsNum = ticketsData.filter(
    (ticket) => ticket.status === "open",
  ).length;

  return (
    <div>
      <Header ticketsNum={ticketsNum} />
      <FilterBar
        ticketsData={ticketsData}
        setFilter={setFilter}
        filter={filter}
      />

      <TicketsTable
        ticketsData={filteredData}
        setTicketsData={setTicketsData}
      />
    </div>
  );
}

export default App;
