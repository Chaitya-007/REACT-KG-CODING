import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  const { delmsg } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => delmsg(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
