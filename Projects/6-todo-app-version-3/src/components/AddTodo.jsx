import { useState, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const { handleNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   // console.log("hello");
  //   setDueDate(event.target.value);
  //   console.log(`no of updates: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log("Add Button Clicked");
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`Name: ${todoName} Date: ${dueDate}`);

    handleNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
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
