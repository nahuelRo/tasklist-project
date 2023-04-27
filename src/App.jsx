import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const initialTasks = [];

function App() {
  const [db, setDb] = useState(initialTasks);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createTask = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateTask = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteTask = (id) => {
    const confirm = window.confirm(
      `Seguro quiere eliminar la tarea con el id ${id}`
    );

    if (!confirm) {
      return;
    }

    const newTasks = db.filter((el) => el.id != id);
    setDb(newTasks);
  };

  return (
    <main className="text-center h-screen flex flex-col justify-center items-center bg-slate-800">
      <h1 className="text-5xl text-white font-medium pb-24">TaskList App</h1>
      <div className="w-screen flex justify-center gap-x-10">
        <TaskForm
          createTask={createTask}
          updateTask={updateTask}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <TaskList
          db={db}
          updateTask={updateTask}
          deleteTask={deleteTask}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </main>
  );
}

export default App;
