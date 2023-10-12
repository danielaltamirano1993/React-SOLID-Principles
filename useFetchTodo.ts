import { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const useFetchTodo = () => {
  const [todo, setTodo] = useState<TodoType[]>([]); //guardado los datos del fecth
  const [isFetching, setIsFetching] = useState(true); // si esta cargando

  useEffect(() => {
    axios
    .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res => {
      setTodo(res.data);
    })
    .catch((e) => {
      console.log(e);      
    })
    .finally(() => {
      setIsFetching(false);
    });
  }, []);
  return {todo, isFetching}
}

  
 