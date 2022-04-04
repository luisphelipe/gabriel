import { Header, NavigationButtons, Layout, Input } from "../../components";

const Login = () => {
  return (
    <>
      <Header />
      <Layout>
        <div style={{ fontWeight: "bold", marginBottom: 64 }}>login</div>
        <Input name="email" label="seu e-mail" placeholder="Email" />
        <Input name="password" label="senha" placeholder="********" />
      </Layout>
      <NavigationButtons />
    </>
  );
};

export default Login;
