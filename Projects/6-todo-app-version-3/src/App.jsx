import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setToDoItems] = useState([]);
  // let [todoDate, setTodoDate] = useState("");

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} with due date : ${itemDueDate}`);
    // const newTodoitems = [
    //   ...todoItems,
    //   { name: itemName, duedate: itemDueDate },
    // ];
    // setToDoItems(newTodoitems);
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const delmsg = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newTodoItems);
    console.log(`Deleted ${itemName}`);
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

  // const defaultTodoItems = [todoItems];

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems delitem={delmsg}></TodoItems>
        <WelcomeMessage />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
