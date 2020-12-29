import React from "react";
import './TaskList.css';
import FlipMove from 'react-flip-move';


function TaskList(props) {
    const tasks = props.tasks;
    const items= tasks.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text}</p>
            <button className='btn' onClick={() => props.deleteTasks(item.key)}>
                delete</button>
        </div>
    })
    return (
        <div>
            {items}
            </div>
    )
}

export default TaskList;