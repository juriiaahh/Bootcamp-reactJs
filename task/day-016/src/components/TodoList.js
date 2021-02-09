import React, { useContext } from "react";
import contextData from "../context/context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { state, dispatch } = useContext(contextData);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <h4 className="row justify-content-md-center">Success! All todos are done!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
    );

    const x = (item) => {
      if(item){
        alert("complate");
        dispatch({type: "COMPLATE", payload: item})
      }
    }

  return (
    <div className="row">
      <div className="col-md-12">
      <div className="row justify-content-md-center">
      <div className="col-md-6">
            <br />
            {header}
          </div>
        </div>
        <div className="row justify-content-md-center">
      <div className="col-md-auto">
            <ul className="list-group">
              {state.todos.map((item, index) => (
                <li key={index} className="list-group-item">
                    <input type="checkbox" className="mr-2"
                      onChange={x} 
                      />
                    <input type="text" value={item} onClick={() => dispatch({ type: "EDIT_TODO", payload: item })}/>
                  
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "DELETE", payload: item })}
                  >
                    Delete
                  </button>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
