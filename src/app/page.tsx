"use client";
import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import TodoApp from "./components/ToDoApp";

export default function Home() {
  //   {
  //   Component,
  //   pageProps,
  // }: {
  //   Component: React.ComponentType;
  //   pageProps: React.JSX.IntrinsicAttributes;
  // })
  return (
    <Provider store={store}>
      <main className="flex w-screen min-h-screen flex-col items-center justify-between p-24">
        <div className="w-11/12 flex flex-col gap-y-4 justify-center items-center">
          <h1 className="font-bold text-3xl"> Lista de tareas </h1>
          <TodoApp></TodoApp>
        </div>
      </main>
    </Provider>
  );
}
