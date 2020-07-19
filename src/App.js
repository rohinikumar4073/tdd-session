import React, { useState } from 'react';
import './App.css';
import ToDoComponent from './ToDoComponent';
import List from './List';
import Utilities from './Utilities'
function App (props) {
  let propsToDo = props.toDoList || [];
  let [toDoList, setToDoList] = useState(propsToDo);
  return (
    <div className="App">
      <ToDoComponent addToDo={(toDo) => {
        Utilities.addToDo(toDo, toDoList);
        setToDoList(toDoList.slice());
      }} ></ToDoComponent>
      <List toDoList={toDoList} setListItemDelete={(id) => {
        Utilities.deleteToDo(id, toDoList);
        setToDoList(toDoList.slice());
      }}
        setListItemDone={(id) => {
          Utilities.setItemDone(id, toDoList);
          setToDoList(toDoList.slice());
        }}></List >
    </div >
  );
}

export default App;
