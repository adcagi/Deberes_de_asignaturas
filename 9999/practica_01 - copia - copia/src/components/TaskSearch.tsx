import { useState } from "react";

// TaskSearch.tsx
const tasksData = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Hacer ejercicio' },
  { id: 3, title: 'Comprar comida' },
  { id: 4, title: 'Leer libro' },
];



const TaskSearch = () => {
  const[search, setSearch] = useState('');
  const[filteredTasks, setFilteredTasks] = useState(tasksData)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)  =>{
    const value= e.target.value;
    setSearch(value);
    if(value.length < 3){
      setFilteredTasks(tasksData)
    }else{
      setFilteredTasks(
        tasksData.filter((task) =>
          task.title.toLowerCase().includes(value.toLowerCase())
      ))
    }
  }
  return (
    <div>
      <input placeholder="Buscar tarea..." value={search} onChange={handleChange}/>
      <ul>

        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;