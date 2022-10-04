import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { reqRoot } from "../components/utils/reqRoot";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [disable, setDisable] = useState(false);

  function checkFields(event) {
    event.preventDefault();
    setDisable(true);

    if (
      !user.email ||
      !user.password ||
      !user.name ||
      !user.confirmEmail ||
      !user.confirmPassword
    ) {
      setDisable(false);
      return alert(`Para prosseguir é necessário preencher todos os campos`);
    }

    if (user.password.length !== 8) {
      setDisable(false);
      return alert("A senha deve ter 8 caractéres");
    }

    if (user.email !== user.confirmEmail) {
      setDisable(false);
      return alert(`Confirmação de email não corresponde`);
    }

    if (user.password !== user.confirmPassword) {
      setDisable(false);
      return alert(`Confirmação de senha não corresponde`);
    }

    sendNewUser();
  }

  async function sendNewUser() {
    try {
      await axios.post(`${reqRoot}/signup`, user);
      navigate("/");
    } catch (error) {
      setDisable(false);
      if (error.response.status === 409) {
        return alert("E-mail já cadastrado!");
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
            placeholder="Nome"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            placeholder="Confirmar e-mail"
            type="email"
            value={user.confirmEmail}
            onChange={(e) => setUser({ ...user, confirmEmail: e.target.value })}
          />
          <input
            placeholder="Senha"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            placeholder="Confirmar senha"
            type="password"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <Button disabled={disable} typeof="submit">
            Sign Up
          </Button>
        </form>
        <StyledLink to="/">Já tem cadastro? Faça login!</StyledLink>
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
