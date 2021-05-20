import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

//accepts props todo, index, updateTodoList
//props can also just be passed as "props" but it can be nicer to be explicit about it
//this is also valid: export default function TodoItem(props)
export default function TodoItem({todo, index, updateTodoList}) {

    //this is a local useState hook, it's state is only in this component
    //the App component does not know about/use this state directly
    //which is why handleChange called updateTodoList to pass updated task data
    //back to App.
    const [ taskItem, setTaskItem] = useState(todo);

    //object deconstrcution of the state. This is not necessary but can make things clearer/more readable.
    const { task, isComplete } = taskItem;

    const handleChange = () => {
        setTaskItem({
            task: task,
            isComplete: !isComplete
        })
        updateTodoList(index, {
            task: task,
            isComplete: !isComplete
        });
    };

    return (

        <div>
            <Form>
                {/*Form.Check and this version of Form are React Bootstrap components.
                The label and inline property below are React Bootstrap things.
                Other things like checked and onChange are normal React.
                This is a controlled component, with whether or not it's checked depending
                on the state, and the state being updated by handleChange.
                 */}
                <Form.Check 
                inline 
                label={task} 
                name="todos" 
                type="checkbox"
                checked={isComplete}
                onChange={handleChange}
                />
            </Form>
        </div>


    )
};