import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TicketsTable from "./components/tickets/TicketsTable";
import { tickets } from "./data";

function App() {
  const ticketsNum = tickets.filter(
    (ticket) => ticket.status === "open",
  ).length;
  return (
    <div>
      <Header ticketsNum={ticketsNum} />
      <FilterBar />

      <TicketsTable />
    </div>
  );
}

export default App;
