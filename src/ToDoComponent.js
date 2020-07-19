import React, { useState } from 'react';

export default function ToDoFiled (props) {
    let [toDoInput, setToDoInput] = useState('')
    return (<div className="d-flex ">
        <label>TO DO</label>
        <input className='input' value={toDoInput} onChange={(e) => {
            setToDoInput(e.target.value)
        }} />
        <button className='btn btn-primary add' onClick={() => props.addToDo(toDoInput)}>Add</button>
    </div>)
}