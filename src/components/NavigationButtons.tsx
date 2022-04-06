import React from "react";

const NavigationButtons = (props: any) => {
  return (
    <div
      style={{
        width: "100%",
        height: 80,
      }}
    >
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          width: "100%",
          height: "100%",
          fontSize: 22,
        }}
        {...props}
      >
        fazer login
      </button>
    </div>
  );
};

export default NavigationButtons;
