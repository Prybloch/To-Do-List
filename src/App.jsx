import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import {v4} from 'uuid';


function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
  
    try {
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Erro ao fazer parse do JSON:", error);
      return []; // Retorna um array vazio se houver erro no JSON
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); 

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {" "}
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
