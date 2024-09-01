import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container.jsx";

function App() {
  let foodItems = ["Aalo", "Banana", "Orange", "Grapes", "Mango", "Green"];
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <p>No items found</p>;
  // }

  // let value = foodItems.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Headlthy Food</h1>
        {/* {foodItems.length === 0 ? <p>No items found</p> : null} */}
        {/* {value} */}
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
