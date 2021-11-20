import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const ToDo = ({ tasks, completeTasks, removeTask, updateTask }) => {
  const [update, setUpdate] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(update.id, value);
    setUpdate({
      id: null,
      value: "",
    });
  };

  if (update.id) {
    return <ToDoForm update={update} onSubmit={submitUpdate}></ToDoForm>;
  }
  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTasks(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => removeTask(task.id)}
        />
        <TiEdit
          className='edit-icon'
          onClick={() => setUpdate({ id: task.id, value: task.text })}
        />
      </div>
    </div>
  ));
};

export default ToDo;
