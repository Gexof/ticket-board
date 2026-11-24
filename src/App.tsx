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
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <Header ticketsNum={ticketsNum} />

        {/* Filters Section */}
        <FilterBar
          ticketsData={ticketsData}
          setFilter={setFilter}
          filter={filter}
        />

        {/* Tickets Table */}
        <TicketsTable
          ticketsData={filteredData}
          setTicketsData={setTicketsData}
        />
      </main>
    </div>
  );
}

export default App;
