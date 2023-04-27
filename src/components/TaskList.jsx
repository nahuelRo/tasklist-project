import React from "react";
import Task from "./Task";

function TaskList({ db, deleteTask, setDataToEdit }) {
  return (
    <div className="flex flex-col w-2/6 gap-y-5">
      {db.length === 0
        ? <h2 className="text-white text-2xl">Sin tareas pendientes</h2>
        : db.map((el) => (
            <Task
              key={el.id}
              el={el}
              deleteTask={deleteTask}
              setDataToEdit={setDataToEdit}
            />
          ))}
    </div>
  );
}

export default TaskList;
