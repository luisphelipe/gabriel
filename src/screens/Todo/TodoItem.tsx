import { FC } from "react";

interface TodoProps {
  title: string;
  description: string;
  handleUpdate: () => void;
}

const TodoItem: FC<TodoProps> = ({ title, description, handleUpdate }) => {
  return (
    <div
      style={{
        margin: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div style={{ cursor: "pointer" }} onClick={handleUpdate}>
        editar
      </div>
    </div>
  );
};

export default TodoItem;
