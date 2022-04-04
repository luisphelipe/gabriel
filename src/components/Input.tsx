import { FC } from "react";

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const Input: FC<Props> = ({ name, label, placeholder }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        margin: "24px 0px",
        fontWeight: "bold",
      }}
    >
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        style={{
          border: "none",
          borderBottom: "1px solid black",
          paddingBottom: 8,
          fontWeight: 16,
        }}
      />
    </div>
  );
};

export default Input;
