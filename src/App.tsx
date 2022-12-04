import React from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

export type FilterType = "all" | "completed" | "active";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterType>("all");

  let filteredTasks = tasks;

  if (filter === "all") {
    filteredTasks = tasks;
  }

  if (filter === "active") {
    filteredTasks = tasks.filter((t) => !t.isDone);
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone);
  }

  function changeFilter(option: FilterType) {
    setFilter(option);
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((t) => t.id != id));
  }

  return (
    <div className="App">
      <TodoList
        title="What to learn"
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
