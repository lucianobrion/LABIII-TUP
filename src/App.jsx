import { useState } from 'react';
import ListaTareas from './components/lista/ListaTareas';
import "./App.css";
import NuevaTarea from './components/nuevaTarea/NuevaTarea';

function App() {
  const [tareas, setTareas] = useState([]);


  const changeState = (data) => {
    setTareas((prevList) =>
      prevList.map((tarea) => (tarea.id === data ? { ...tarea, estado: !tarea.estado } : tarea)));
  };

  const changeList = (data) => {
    setTareas((prevList) =>
      prevList.filter((elemento) => elemento.id !== data)
    );
  };

  const newTarea = (data) => {
    setTareas(prev => [...prev, data])
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <ListaTareas tareas={tareas} pushDeleted={changeList} pushIndex={changeState} />
      <NuevaTarea enviarTarea={newTarea} />
    </div>
  );
};

export default App;