import { taskTypes } from "../types/task";
import tasksService from "../services/tasks.service";

export const listTasks = () => async (dispatch: any) => {
  try {
    dispatch({
      type: taskTypes.TASKS_REQUEST,
    });

    const tasksrv = new tasksService();
    const res = await tasksrv.getAllTasks();
    dispatch({
      type: taskTypes.TASKS_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: taskTypes.TASKS_FAIL,
      payload: "this is an error",
    });
  }
};
