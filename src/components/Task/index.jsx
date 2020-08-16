import React from 'react';

import Button from '../Button';

import "./task.css";

const Task = (props) =>{
    return(
        <div className={props.isDone + " task"}>
            <p>{props.content}</p>
            <div className={props.isDone ? "cancel-done-button" : "is-done-button"} onClick={props.setDone}>
            <Button> {props.isDone ? <i className="fa fa-ban"></i> : <i className="fa fa-check"></i>} </Button>
            </div>
            <div className="button-task" onClick={props.onClick}>
                <Button isTask={true}><i className="fa fa-trash-o"></i></Button>
            </div>
        </div>
    )
}

export default Task;