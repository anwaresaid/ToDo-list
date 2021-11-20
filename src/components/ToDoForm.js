import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTasks } from "../store/actions/tasks.actions";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");
  // const dispatch = useDispatch();
  // const tskRedux = useSelector((state) => state.tasks);
  // const { loading: reduxLoding, success, repos } = tskRedux;
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  });
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    // dispatch(listTasks());
    // console.log("checking data", repos);
    setInput("");
  };

  return (
    <div>
      <form className='list-form' onSubmit={onSubmit}>
        {props.update ? (
          <>
            <input
              type='text'
              placeholder='enter a task'
              value={input}
              className='list-input edit'
              onChange={onChange}
              ref={focus}
            ></input>
            <button onClick={onSubmit} className='submit-btn edit'>
              update task
            </button>
          </>
        ) : (
          <>
            <input
              type='text'
              placeholder='enter a task'
              value={input}
              className='list-input'
              onChange={onChange}
              ref={focus}
            ></input>
            <button onClick={onSubmit} className='submit-btn'>
              add task
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;
