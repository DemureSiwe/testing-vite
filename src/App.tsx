import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["Johannesburg", "Durban", "Cape Town", "Limpompo", "Bloem"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
