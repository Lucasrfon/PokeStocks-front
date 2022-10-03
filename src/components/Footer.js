import styled from "styled-components"

export default function Footer() {
    return(
        <Container>
            <h6>Gotta Buy 'Em All</h6>
            <p>ポケモンに害はありませんでした、<br /> このウェブサイトの作成中。</p>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    color: #fecc09;
    text-shadow: 0 0 3px #FF0000, 0px 0px 5px #0000FF;;

    h6 {
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
        margin-bottom: 10px;
    }

    p {
        font-size: 8px;
    }
`