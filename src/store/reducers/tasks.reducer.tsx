import { taskTypes } from "../types/task";

export const listTasksReducer = (state = "", action: any) => {
  switch (action.type) {
    case taskTypes.TASKS_REQUEST:
      return { loading: true };
    case taskTypes.TASKS_SUCCESS:
      return {
        loading: false,
        success: true,
        tasks: action.payload,
      };

    case taskTypes.TASKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
