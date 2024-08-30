import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Aalo", "Banana", "Orange", "Grapes", "Mango", "Green"];
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No items found</p>;
  // }

  // let value = foodItems.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>Headlthy Food</h1>
      {/* {foodItems.length === 0 ? <p>No items found</p> : null} */}
      {/* {value} */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
