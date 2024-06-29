import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["new york", "london", "test1", "test2"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
