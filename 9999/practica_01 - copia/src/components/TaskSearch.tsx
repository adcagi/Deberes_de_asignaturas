import { useState } from "react";

// TaskSearch.tsx
const tasksData = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Hacer ejercicio' },
  { id: 3, title: 'Comprar comida' },
  { id: 4, title: 'Leer libro' },
];

const TaskSearch = () => {
  const[seacrh, setSearch] = useState('');
  const[filterTasks, setFilterTasks] = useState(tasksData);

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setSearch(value);

    if(value.length < 3){
      setFilterTasks(tasksData);
    }else{
      setFilterTasks(tasksData.filter((task)=>
      task.title.toLocaleLowerCase().includes(value.toLowerCase())))
    }
  }
  return (
    <div>
      <input placeholder="Buscar tarea..." value={seacrh} onChange={handleChange}/>
      <ul>
        {filterTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;