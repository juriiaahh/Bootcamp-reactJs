import React, { useContext, useState } from "react";
import Store from "../context/context";

export default function EditTodoForm() {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoEdit(item) {
    dispatch({ type: "EDIT_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoEdit();
  }

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <br />
        <div className="input-group">
          <input
            className="form-control"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleTodoEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
