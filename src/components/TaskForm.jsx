import React, { useState, useEffect } from "react";

const initialTask = {
  title: "",
  description: "",
  id: null,
};

function TaskForm({ createTask, updateTask, dataToEdit, setDataToEdit }) {
  const [form, setForm] = useState(initialTask);

  useEffect(() => {
    if (dataToEdit) {
      console.log(dataToEdit);
      setForm(dataToEdit);
    } else {
      setForm(initialTask);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert("Campos incompletos");
      return;
    }

    if (form.id === null) {
      createTask(form);
    } else {
      updateTask(form);
    }

    setForm(initialTask);
    setDataToEdit(null);
  };

  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          className="w-80 block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          type="text"
          name="title"
          placeholder="Titulo"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          className="w-80 block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          name="description"
          cols="30"
          rows="10"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
        />

        <input
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded"
          type="submit"
          value={dataToEdit === null ? "Crear" : "Editar"}
        />
      </form>
    </>
  );
}

export default TaskForm;
