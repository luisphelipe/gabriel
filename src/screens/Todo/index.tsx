import { useState } from "react";

import TodoItem from "./TodoItem";

const initialState = [
  { title: "todo 1", description: "description 1" },
  { title: "todo 2", description: "description 2" },
  { title: "todo 3", description: "description 3" },
];

const Todo = () => {
  const [todos, setTodos] = useState(initialState);

  const handleUpdate = (index: number, title: string, description: string) => {
    setTodos((oldTodos) => {
      const newTodos = [...oldTodos];

      newTodos[index].title = title;
      newTodos[index].description = description;

      return newTodos;
    });
  };

  return (
    <div style={{ margin: "40px 32px" }}>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          {...item}
          handleUpdate={() =>
            handleUpdate(index, "novo titulo", "nova descrição")
          }
        />
      ))}
    </div>
  );
};

export default Todo;
