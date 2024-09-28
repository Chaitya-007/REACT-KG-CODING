import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const setDel = (namme) => {
    delmsg(namme);
  };

  const { todoItems, delmsg } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.duedate}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
