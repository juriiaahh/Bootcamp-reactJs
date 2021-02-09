import React from "react";

export const TodoHeader = (props) => (
    <div className="row justify-content-md-center">
        <div className="col-md-auto">
            <div class="col">
                <h2>Todo List</h2>
                <p> {props.children}</p>
            </div>
        </div>
    </div>
);
