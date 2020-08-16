import React, {useState} from 'react';

import Button from '../Button';
import Task from '../Task';

import "./body.css";

const Body = () =>{

    const [tasks, setTasks] = useState([
        {id: 1, name: "Primeira tarefa"},
        {id: 2, name: "Segunda tarefa"},
        {id: 3, name: "Terceira tarefa"},
        {id: 4, name: "Quarta tarefa"},
        {id: 5, name: "Quinta tarefa"},
        {id: 6, name: "Sexta tarefa"},
    ]);

    function newTask(){
        
    }

    function deleteTask(id){
        let currentTask = tasks.filter(task => task.id === id);
        tasks.splice(tasks.indexOf(currentTask[0]), 1); 
        setTasks(current => [...current]);
    }

   const getTasks = tasks.map(task => (
        <Task key={task.id} content={task.name} onClick={() => deleteTask(task.id)}/>
    ));

    return (
        <div className="body-container">
            <div className="body-top">
                <p>Adicionar Nova Tarefa:</p>
                <div>
                    <input type="text"/>
                    <Button content="+"/>
                </div>
                <div className="search-task">
                    <span>Buscar Tarefa:</span>
                    <input type="text"/>
                    <Button content="Buscar"/>
                </div>
            </div>
            <div className="tasks" id="tasks">
                {getTasks}
            </div>
        </div>
    )
}

export default Body;
