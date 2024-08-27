import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./features/toDoSlice";

export const store = configureStore({ reducer: { tareas: tareasReducer } });

export type IRootState = ReturnType<typeof store.getState>;
export default store;
