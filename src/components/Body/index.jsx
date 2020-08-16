import React, {useState} from 'react';

import Button from '../Button';
import Task from '../Task';

import "./body.css";

const Body = () =>{

    const [tasks, setTasks] = useState([
        {id: 1, name: "Primeira tarefa", isDone: false},
        {id: 2, name: "Segunda tarefa", isDone: false},
        {id: 3, name: "Terceira tarefa", isDone: true},
        {id: 4, name: "Quarta tarefa", isDone: false},
        {id: 5, name: "Quinta tarefa", isDone: false},
        {id: 6, name: "Sexta tarefa", isDone: false},
    ]);

    const [newId, setNewId] = useState(7);

    const [inputTask, setInputTask] = useState("");

    function deleteTask(id){
        let currentTask = tasks.filter(task => task.id === id);
        tasks.splice(tasks.indexOf(currentTask[0]), 1); 
        setTasks(current => [...current]);
    }

    function setDone(id){
        let currentTask = tasks.filter(task => task.id === id);

        currentTask[0].isDone = currentTask[0].isDone ? false : true;
        console.log(currentTask[0]);
        deleteTask(id);

        setTasks([...tasks, currentTask[0]]);

        console.log(tasks);
    }

   const getTasks = tasks.map(task => (
        <Task 
            key={task.id} 
            content={task.name} 
            onClick={() => deleteTask(task.id)} 
            setDone={() => setDone(task.id)} 
            isDone={task.isDone ? "is-done" : ""}
        />
    ));

    const handleInputNewTask = (e) =>{
        setInputTask(e.target.value);
    }

    const addNewTask = () =>{
        setNewId(newId + 1);
        setTasks([...tasks, {id: newId, name: inputTask, isDone: false}]);
    }

    return (
        <div className="body-container">
            <div className="body-top">
                <div className="new-task">
                    <p>Adicionar Nova Tarefa:</p>
                    <input type="text" value={inputTask} onChange={handleInputNewTask}/>
                    <div className="inputButton" onClick={addNewTask}>
                        <Button> <i className="fa fa-plus"></i> </Button>
                    </div>
                </div>
            </div>
            <div className="tasks" id="tasks">
                {getTasks}
            </div>
        </div>
    )
}

export default Body;
