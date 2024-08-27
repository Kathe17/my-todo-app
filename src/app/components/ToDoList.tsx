// components/TodoList.js
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./toDoItem";
import { IRootState } from "../store";

function TodoList() {
  const tareas = useSelector((estado: IRootState) => estado.tareas);

  return (
    <ul className="flex flex-col gap-4 py-8 px-4">
      {tareas.map((tarea) => {
        return <TodoItem key={tarea.nombre} tarea={tarea} />;
      })}
    </ul>
  );
}

export default TodoList;
