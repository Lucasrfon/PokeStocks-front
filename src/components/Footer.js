import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

export default function Footer() {
  return (
    <Container>
      <StyledLink to="/">
        <ImExit />
      </StyledLink>
      <h6>Gotta Buy 'Em All</h6>
      <p>
        ポケモンに害はありませんでした、
        <br /> このウェブサイトの作成中。
      </p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  color: #fecc09;
  text-shadow: 0 0 3px #ff0000, 0px 0px 5px #0000ff;

  h6 {
    font-family: "Press Start 2P", cursive;
    font-size: 10px;
    margin: 10px 0px;
  }

  p {
    font-size: 8px;
  }
`;

const StyledLink = styled(Link)`
  color: #373b13;
  font-size: 34px;
`;
