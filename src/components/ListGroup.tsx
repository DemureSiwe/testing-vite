function ListGroup() {
  const items = ["Johannesburg", "Durban", "Cape Town", "Limpompo", "Bloem"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
