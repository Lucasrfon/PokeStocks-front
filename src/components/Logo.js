import styled from "styled-components";
import pokemon from "./images/pokemon.png";
import pokeball from "./images/pokeball.png";
import stocks from "./images/stocks.png";

export default function Logo() {
  return (
    <Container>
      <img src={pokemon} alt="pokemon" />
      <img src={pokeball} alt="img" />
      <img src={stocks} alt="img" />
      <h1>Stocks</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f7f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 540px;
  height: 300px;
  position: relative;
  text-align: center;
  border-radius: 60px;
  box-shadow: 2px 2px 10px #2e3436;

  h1 {
    color: #fecc00;
    text-shadow: 0 0 3px #ff0000, 0px 0px 5px #0000ff;
    font-size: 26px;
    z-index: 2;
    margin-top: 250px;
    font-family: "Press Start 2P", cursive;
  }

  img,
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  img:first-child {
    width: 400px;
    z-index: 1;
  }

  img:nth-child(2) {
    width: 70px;
    z-index: 2;
    margin-top: 150px;
  }

  img:nth-child(3) {
    width: 140px;
    margin-top: 130px;
  }
`;
