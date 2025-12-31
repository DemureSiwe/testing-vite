import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "./App.css";

function App() {
  let items = ["Johannesburg", "Durban", "Cape Town", "Limpompo", "Bloem"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Alert>
          Hello world <span>from alert</span>
        </Alert>
      </div>
    </div>
  );
}

export default App;
