import { createSlice } from "@reduxjs/toolkit";
import { TareaModel } from "../models/TareaModel";

const initialState: TareaModel[] = [];

const toDoSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    //Payload es una nueva tarea, debe corresponder al modelo TareaModel
    addTarea(estado, accion) {
      if (accion.payload.nombre !== "") {
        return [...estado, accion.payload];
      } else {
        return estado;
      }
    },
    //Debe haber un payload mixto, tanto el nombre de la tarea a modificar, como el nuevo nombre, objeto con nombre y opcionalmente un nuevoNombre y/o un nuevo estado
    editTarea(estado, accion) {
      const tareaAEditar = estado.find((tarea) => {
        return tarea.nombre === accion.payload.nombre;
      });
      if (tareaAEditar) {
        const newTarea = {
          nombre: accion.payload.nuevoNombre ?? tareaAEditar.nombre,
          estado: accion.payload.nuevoEstado ?? tareaAEditar.estado,
        };
        return [
          ...estado.filter((tarea) => tarea.nombre !== accion.payload.nombre),
          newTarea,
        ];
      } else {
        return estado;
      }
    },
    //Para eliminar necesitamos el id, el payload es el id
    deleteTarea(estado, accion) {
      return estado.filter((tarea) => tarea.nombre !== accion.payload);
    },
  },
});

export const { addTarea, editTarea, deleteTarea } = toDoSlice.actions;
export default toDoSlice.reducer;
