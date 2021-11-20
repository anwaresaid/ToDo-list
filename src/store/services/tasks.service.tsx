import axios from "axios";

export default class tasksService {
  public async getAllTasks() {
    const {
      data: { data },
    } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return data;
  }
}
