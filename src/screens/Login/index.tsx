import { useNavigate } from "react-router-dom";
import { Header, NavigationButtons, Layout, Input } from "../../components";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("faz login utilizando a api...");
    navigate("/todo");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Layout>
        <div style={{ fontWeight: "bold", marginBottom: 64 }}>login</div>
        <Input
          name="email"
          label="seu e-mail"
          placeholder="Email"
          type="email"
          required
        />
        <Input
          name="password"
          label="senha"
          placeholder="********"
          type="password"
          required
        />
      </Layout>
      <NavigationButtons type="submit" />
    </form>
  );
};

export default Login;
