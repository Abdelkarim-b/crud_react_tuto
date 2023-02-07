import { useState } from 'react';
import './App.css';
import {Task} from './Task' 

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const onChangeHandler = (event)=>{
   setNewTask(event.target.value);
  };

  const addTask = ()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName : newTask,
      completed: false
    }
    setTodoList([...todoList,task]);
  }
  
  const deleteTask = (id)=>{
  setTodoList(todoList.filter((task)=> task.id !== id)) 
};

  const completeTask = (id) =>{
  setTodoList(todoList.map((task)=>{
    if(task.id === id){
      return{...task, completed: true};
    }else {
      return task
    }
  }))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={onChangeHandler}/>
        <button onClick={addTask}>add task</button>
      </div>
      <div className="listTasks">
        {todoList.map((task)=>{
          return(
          <Task 
            name={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask} 
            completeTask={completeTask}
          /> 
          // <div>
          //   <h2>{task.taskName}</h2>
          //   <button onClick={()=>{deleteTask(task.id)}}>X</button>
          // </div>
          )  
        })}
      </div>
    </div>
  );
}

export default App;