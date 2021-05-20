import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

//todoList is a prop, as seen in the () below
export default function TaskProgressBar({todoList}) {
    //function which uses a reducer on todoList to get count of items with isComplete: true.
    const completeItems = todoList.reduce((totalComplete, currentItem) => {
        if(currentItem.isComplete){
            totalComplete++;
        }
        return totalComplete;
    }, 0);

    return (
        //React Bootstrap component, now is a property that component has
        //https://react-bootstrap.github.io/components/progress/
        <ProgressBar now={(completeItems/todoList.length)*100}/>
    )
};