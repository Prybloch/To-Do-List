import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";


function App() {
 const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Estudar programação",
    description: "Estudar react para se tornar uma desenvolvedora.",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Estudar inglês",
    description: "Estudar react para se tornar uma desenvolvedora.",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Estudar japonês",
    description: "Estudar japonês para morar no Japão um dia.",
    isCompleted: false,
  }
 ]);
 return (
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    <div className="w-[500px]">
    <h1 className="text-3xl text-slate-100 font-bold text-center"> Gerenciador de Tarefas</h1>
    <AddTask />
    <Tasks tasks={tasks} />
    </div>
  </div>
 );
}

export default App;
