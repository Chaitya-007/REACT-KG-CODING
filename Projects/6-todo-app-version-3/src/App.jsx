import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    console.log(
      `New Item Added : ${action.payload.itemName} with due date : ${action.payload.itemDueDate}`
    );

    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDueDate },
    ];
  } else action.type === "DELETE_TYPE";
  {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
    console.log(`Deleted ${action.payload.itemName}`);
  }

  return newTodoItems;
};

function App() {
  // let [todoItems, setToDoItems] = useState([]);
  // let [todoDate, setTodoDate] = useState("");

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const delmsg = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_TYPE",
      payload: {
        itemName: itemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
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
    <TodoItemsContext.Provider value={{ todoItems, handleNewItem, delmsg }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems></TodoItems>
        <WelcomeMessage />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
