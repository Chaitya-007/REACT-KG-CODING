import { useState, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    // console.log("hello");
    setDueDate(event.target.value);
    console.log(`no of updates: ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log("Add Button Clicked");
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
