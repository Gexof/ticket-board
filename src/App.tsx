import { useState } from "react";
import FilterBar from "./components/Filter/FilterBar";
import Header from "./components/Header";
import TicketsTable from "./components/tickets/TicketsTable";
import { tickets as initialTickets } from "./data";
import type { SortOption, TicketFilter } from "./types";

function App() {
  const [ticketsData, setTicketsData] = useState(initialTickets);
  const [filter, setFilter] = useState<TicketFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("priority");

  const filteredData =
    filter === "all"
      ? ticketsData
      : ticketsData.filter((ticket) => ticket.status === filter);

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "priority") {
      const priorityOrder = {
        high: 1,
        medium: 2,
        low: 3,
      };

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    if (sortBy === "recently-updated") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }

    if (sortBy === "oldest-updated") {
      return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    }

    return 0;
  });

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
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Tickets Table */}
        <TicketsTable
          ticketsData={sortedData}
          setTicketsData={setTicketsData}
        />
      </main>
    </div>
  );
}

export default App;
