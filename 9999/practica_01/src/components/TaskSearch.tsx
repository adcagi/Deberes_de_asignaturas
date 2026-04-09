import { useState } from 'react';

const tasksData = [
  { id: 1, title: 'Estudiar React' },
  { id: 2, title: 'Hacer ejercicio' },
  { id: 3, title: 'Comprar comida' },
  { id: 4, title: 'Leer libro' },
];

const TaskSearch = () => {
  const [search, setSearch] = useState('');

  const filteredTasks =
    search.length < 3
      ? tasksData
      : tasksData.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <input
        placeholder="Buscar tarea..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;