import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Green"];
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No items found</p>;
  // }

  let value = foodItems.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>Headlthy Food</h1>
      {/* {foodItems.length === 0 ? <p>No items found</p> : null} */}
      {/* {value} */}
      {foodItems.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
