import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  let items = ["Johannesburg", "Durban", "Cape Town", "Limpompo", "Bloem"];
  const [alertVisible, setAlertVisisbility] = useState(false);
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
        {alertVisible && <Alert>Hello world</Alert>}

        <Button onClick={() => setAlertVisisbility(true)}>My Button</Button>
      </div>
    </div>
  );
}

export default App;
