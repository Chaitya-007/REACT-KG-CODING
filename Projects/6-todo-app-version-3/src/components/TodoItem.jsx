import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate, method }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => method(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
