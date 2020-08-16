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

    const [newId, setNewId] = useState(7);

    const [inputTask, setNewTask] = useState("asdadas");

    function deleteTask(id){
        let currentTask = tasks.filter(task => task.id === id);
        tasks.splice(tasks.indexOf(currentTask[0]), 1); 
        setTasks(current => [...current]);
    }

   const getTasks = tasks.map(task => (
        <Task key={task.id} content={task.name} onClick={() => deleteTask(task.id)}/>
    ));

    const handleInputNewTask = (e) =>{
        setNewTask(e.target.value);
    }

    const addNewTask = () =>{
        setNewId(newId + 1);
        console.log(newId);
        let newTask = {id: newId, name: inputTask};
        setTasks([...tasks, newTask]);
        console.log(tasks);
    }

    return (
        <div className="body-container">
            <div className="body-top">
                <div className="new-task">
                    <p>Adicionar Nova Tarefa:</p>
                    <input type="text" value={inputTask} onChange={handleInputNewTask}/>
                    <div className="inputButton" onClick={addNewTask}>
                        <Button content="+" /> 
                    </div>
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
