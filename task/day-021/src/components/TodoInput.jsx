import {React, useState} from 'react'
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let  dispatch = useDispatch();
    return (
        <div className="container col-md-4">
        <h3 className="p-3">Task Day-021 Redux</h3>
            <div className="row m-2">
                <input 
                onChange={(e) => setName(e.target.value)}
                value = {name}
                type="text"
                className="col form-control"/>
                <button 
                onClick={() => {
                    dispatch( addTodo(
                        {
                            id:uuid(),
                            name: name
                        }
                    ))
                    setName('');
                }}
                className="btn mx-2" style={{backgroundColor:"#851c50", color:"white"}}> Add </button>
            </div>
        </div>
    )
}

export default TodoInput
 