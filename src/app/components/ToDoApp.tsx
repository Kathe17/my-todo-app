import React from "react";
import TodoList from "./ToDoList";
import TodoForm from "./toDoForm";

function TodoApp() {
  return (
    <div className="w-11/12 p-2 gap-y-8">
      <h2 className="font-semibold text-xl underline"> Gestor de Tareas </h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
