// components/TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTarea } from "../features/toDoSlice";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTarea({ nombre: value, estado: "Pendiente" }));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-x-4">
      <input
        className="p-2 rounded-xl text-black"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-orange-600 p-2 rounded-lg text-white" type="submit">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TodoForm;
