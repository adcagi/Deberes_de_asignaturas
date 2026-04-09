interface Task{
    id:number,
    title:string,
    completed:boolean
}

const TaskList = ({tasks}: {tasks:Task[]}) =>{
    return(
        <ul>
            {tasks.map(task=>(
                <li
                    key={task.id}
                    style={{
                        textDecoration:task.completed ? 'line-through' : 'none',
                    }}>
                        {task.title}

                </li>
            ))}
        </ul>
    )
}

export default TaskList;