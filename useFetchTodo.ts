import { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const useFetchTodo = () => {
  const [todo, setTodo] = useState<TodoType[]>([]); // Guarda los datos del fetch
  const [isFetching, setIsFetching] = useState(true); // Indica si está cargando

  useEffect(() => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { todo, isFetching };
};
