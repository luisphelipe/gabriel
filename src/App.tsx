import { Login, Todo } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main
      style={{
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
