import './App.css';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import TaskProgressBar from './components/TaskProgressBar'

export default function App() {

  //state for array of todo items
  //todo items are added in TodoInput
  //each is an object, e.g. {task: "do laundry", isComplete: false}
  const [todoList, setTodoList] = useState([]);
  
  /*This function is passed as a prop to
  TodoInput below. In that component, the new
  todo item is passed to the function on click.
  Then as seen below, the state is updated with 
  that item added.
  */
  const handleAddTodo = item => {
    setTodoList([...todoList, item]);
  };

  /*
  This function is passed to TodoItem.
  In that component, when an item is checked,
  an on change handler function is called, which
  in turn calls this and passes it the index and
  the updated task with isComplete changed. 
  The state is then updated to include that update by
  changing the relevant index to point to the updated version
  of the task.
  */
  const updateTodoList = (index, task) => {
    const newTodoList = [...todoList];
    newTodoList[index] = task;
    setTodoList(newTodoList);
  };

  return (
    //Container is a React Boostrap component, an implentation of flexbox
    //The App component is attached to the html in index.js
    <Container className="App">
      <div>
        {/* This component is a progress bar, which is passed todoList as a prop */}
        <TaskProgressBar
          todoList={todoList}
        />
      </div>
      <div>
        {/* Here todoList's data is mapped onto the TodoItem component
        the index, each todo item, and the updateTodoList function are passed as props.*/}
        {todoList.map((todo, index) => 
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          updateTodoList={updateTodoList}
        />
        )}
      </div>
      <div>
        {/*The TodoInput component, which is passed the handleAddTodo function as a prop,
        and inside the component uses it to pass the new data back to the main app component  
        to update the state.*/}
        <TodoInput
          handleAddTodo={handleAddTodo}
        />
      </div>
    </Container>
  );
};