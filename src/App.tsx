import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TicketsTable from "./components/TicketsTable";

function App() {
  return (
    <div>
      <Header ticketsNum={3} />
      <FilterBar />

      <TicketsTable />
    </div>
  );
}

export default App;
