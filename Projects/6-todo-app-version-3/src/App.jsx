import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} with due date : ${itemDueDate}`);
    const newTodoitems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setToDoItems(newTodoitems);
  };

  // const todoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
