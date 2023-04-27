import React from "react";

function Task({ el, deleteTask, setDataToEdit }) {
  let { title, description, id } = el;
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-white text-left text-4xl">{title}</h2>
        <p className="text-white text-left text-lg">{description}</p>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setDataToEdit(el)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteTask(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Task;
