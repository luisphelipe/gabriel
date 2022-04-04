import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        padding: "64px 32px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
