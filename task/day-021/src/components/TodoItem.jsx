import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

export default function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    let dispatch = useDispatch();
    const [name, setName] = useState(todo.name);

    return (
        <div className="container col-md-4">
            <div className="row justify-content-md-center p-2">
            <div className="col-md-auto">#{todo.id.length > 1 ?todo.id[2] : todo.id}</div>
                    <div className="col">
                        {editable ? <input type="text" className="form-control" 
                        value={name} 
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        /> : <h4>{todo.name}</h4>}
                    </div>

                    <button 
                    onClick={()=>{
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name:name
                            }
                        ));
                        if(editable){
                            setName(todo.name);
                        }
                        setEditable(!editable);
                    }}
                    className="btn mx-2" style={{backgroundColor:"#851c50", color:"white"}}>
                        {editable ? "Update" : "Edit"}
                    </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
    )
}
