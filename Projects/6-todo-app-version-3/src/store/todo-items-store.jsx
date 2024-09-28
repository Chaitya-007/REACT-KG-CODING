import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  handleNewItem: () => {},
  delmsg: () => {},
});

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

const TodoItemsContextProvider = ({ children }) => {
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
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
