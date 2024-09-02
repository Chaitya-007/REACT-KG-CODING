import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No items found</p>;
  // }

  // let value = foodItems.length === 0 ? <p>No items found</p> : null;

  let [foodItems, setfoodItems] = useState([]);

  const onKeyDown = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      event.target.value = "";
      setfoodItems(newItems);
      console.log(`Value of new food item is ${newFoodItem}`);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Headlthy Food</h1>
        {/* {foodItems.length === 0 ? <p>No items found</p> : null} */}
        {/* {value} */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are goodd for your health and
          well being{" "}
        </p>
      </Container>
    </>
  );
}

export default App;
