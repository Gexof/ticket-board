import { useState } from "react";
import FilterBar from "./components/Filter/FilterBar";
import Header from "./components/Header";
import TicketsTable from "./components/tickets/TicketsTable";
import { tickets as initialTickets } from "./data";

function App() {
  const [ticketsData, setTicketsData] = useState(initialTickets);

  const ticketsNum = ticketsData.filter(
    (ticket) => ticket.status === "open",
  ).length;

  return (
    <div>
      <Header ticketsNum={ticketsNum} />
      <FilterBar ticketsData={ticketsData} />

      <TicketsTable ticketsData={ticketsData} setTicketsData={setTicketsData} />
    </div>
  );
}

export default App;
