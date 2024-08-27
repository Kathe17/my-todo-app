// components/TodoItem.js
"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTarea, editTarea } from "../features/toDoSlice";
import { TareaModel } from "../models/TareaModel";
import { FaCheck, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { RiSave3Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

function TodoItem({ tarea }: { tarea: TareaModel }) {
  const [value, setValue] = useState(tarea.nombre);
  const [estoyEditando, setEstoyEditando] = useState(false);
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center border-b p-2">
      {estoyEditando ? (
        <div className="flex items-center relative">
          <input
            className="p-2 rounded-xl text-black"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="absolute right-2"
            onClick={() => {
              setEstoyEditando(!estoyEditando);
              setValue(tarea.nombre);
            }}
          >
            <IoIosClose size={25} color="grey" />
          </button>
        </div>
      ) : (
        <span
          className={`${
            tarea.estado === "Hecha" ? "line-through text-green-400" : ""
          }`}
        >
          {tarea.nombre}
        </span>
      )}
      <div className="flex justify-between gap-x-4">
        <button
          className=" p-2 rounded-lg text-white"
          onClick={() =>
            dispatch(
              editTarea({
                nombre: tarea.nombre,
                nuevoEstado:
                  tarea.estado === "Pendiente" ? "Hecha" : "Pendiente",
              })
            )
          }
        >
          {tarea.estado === "Pendiente" ? (
            <FaCheck color="green" size={20} />
          ) : (
            <GrClose color="red" size={20} />
          )}
        </button>
        <button
          onClick={() => {
            setEstoyEditando(!estoyEditando);
            if (estoyEditando) {
              dispatch(editTarea({ nombre: tarea.nombre, nuevoNombre: value }));
            }
          }}
        >
          {estoyEditando ? (
            <RiSave3Fill color="yellow" size={20} />
          ) : (
            <CiEdit color="yellow" size={20} />
          )}
        </button>
        <button onClick={() => dispatch(deleteTarea(tarea.nombre))}>
          <FaTrash color="red" size={20} />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
