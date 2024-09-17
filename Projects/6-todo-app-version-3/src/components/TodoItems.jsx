import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, delitem }) => {
  const setDel = (namme) => {
    delmsg(namme);
  };

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.duedate}
          method={delitem}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
