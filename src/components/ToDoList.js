import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) return;

    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };
  const completeTasks = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.iscomplete = !task.iscomplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const removeTsk = [...tasks].filter((task) => task.id !== id);
    setTasks(removeTsk);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return;

    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };
  return (
    <div>
      <h1>today's plan</h1>
      <ToDoForm onSubmit={addTask} />
      <ToDo
        removeTask={removeTask}
        tasks={tasks}
        completeTasks={completeTasks}
        updateTask={updateTask}
      />
    </div>
  );
};

export default ToDoList;
