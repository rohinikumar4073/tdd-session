import React from 'react';

export default function List (props) {
    return <ul>
        {props.toDoList.map((toDo) => {
            return (<li className="to-do-list" key={toDo.id}>
                <span style={toDo.done ? { textDecoration: 'line-through' } : null}>{toDo.value}</span>
                <button className='done btn btn-secondary' onClick={() => props.setListItemDone(toDo.id)}>Done</button>
                <button className='delete btn btn-danger' onClick={() => props.setListItemDelete(toDo.id)}>Delete</button>
            </li>)
        })}
    </ul>
}