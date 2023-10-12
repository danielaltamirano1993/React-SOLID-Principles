import axios from "axios";

export type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = () => {
  return axios
    .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(`Error fetching todos: ${error.message}`);
    });
};
