import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function TodoInput({handleAddTodo}) {

    //local state, used to keep track of/control input as it's being entered
    const [todo, setTodo] = useState("");

    //function which updates the todo state upon each change in the input
    const handleChange = e => {
        setTodo(e.target.value);
    };

    //function for when add is clicked
    //Changes local state back to a blank so input doesn't show what was typed
    //And passes the new object back to App
    const handleClick = () => {
        handleAddTodo({
            task: todo,
            isComplete: false
        });
        setTodo("");
    };

    //this is function to handle keypress and will
    //called the function handleClick if enter is pressed
    //so that Enter can be used and not just clicking the button.
  const handleKeypress = e => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return (
        //InputGroup, FormControl and Button are React Bootstrap components.
        <InputGroup className="mb-3">
            {/* FormControl is a controlled component, the value is tied to the todo state
            which is updated with the handleChange function.*/}
            <FormControl
            placeholder="task"
            aria-label="task to add"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            onKeyPress={handleKeypress}
            value={todo}
            />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleClick}>Add</Button>
            </InputGroup.Append>
        </InputGroup>
    )
};