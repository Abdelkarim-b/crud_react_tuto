export const Task = (props)=>{
    return (
        <div className ="Task"> 
            <h2 
              style={{backgroundColor: props.completed ? "green" : "white"}}
            >
              {props.name}
            </h2>
            <button onClick={()=>{props.deleteTask(props.id)}}>X</button>
            <button onClick={()=>{props.completeTask(props.id)}}>Complete</button>
        </div>          
    );
}