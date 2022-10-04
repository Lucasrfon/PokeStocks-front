import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { reqRoot } from "../components/utils/reqRoot";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);

  function checkFields(event) {
    event.preventDefault();
    setDisable(true);

    if (!user.email || !user.password) {
      setDisable(false);
      return alert(`Para prosseguir é necessário preencher todos os campos`);
    }

    if (user.password.length !== 8) {
      setDisable(false);
      return alert("A senha deve ter 8 caracteres");
    }

    sendUser();
  }

  async function sendUser() {
    try {
      await axios.post(`${reqRoot}/login`, user);
      navigate("/home");
    } catch (error) {
      setDisable(false);
      if (error.response.status === 401) {
        return alert(error.response.data);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Logo />
      <main>
        <form onSubmit={checkFields}>
          <input
            placeholder="E-mail"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            placeholder="Senha"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button disabled={disable} typeof="submit">
            Login
          </Button>
        </form>
        <StyledLink to="/signup">
          Não tem uma conta ainda? Cadastre-se!
        </StyledLink>
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #dc0a2d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  input {
    width: 500px;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 10px;
    border: none;
    border-radius: 60px;
    box-shadow: 2px 2px 5px #2e3436;
  }

  button {
    margin-top: 20px;
    width: 250px;
    height: 50px;
    background-color: #330066;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 60px;
    box-shadow: 0 0 5px yellow, 0px 0px 10px blue;
  }
`;

const Button = styled.button`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #024f8a;
`;
