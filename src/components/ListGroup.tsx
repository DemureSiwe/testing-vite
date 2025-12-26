import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Johannesburg", "Durban", "Cape Town", "Limpompo", "Bloem"];

  const handleClick = (Event: MouseEvent) => console.log(Event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
