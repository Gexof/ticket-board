import FilterBar from "./components/FilterBar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header ticketsNum={3} />
      <FilterBar />
    </div>
  );
}

export default App;
