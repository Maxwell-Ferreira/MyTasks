import React from 'react';

import Button from '../Button';

import "./task.css";

const Task = (props) =>{
    return(
        <div className="task">
            <p>{props.content}</p>
            <div className="button-task" onClick={props.onClick}>
                <Button content="Excluir"isTask={true}/>
            </div>
        </div>
    )
}

export default Task;