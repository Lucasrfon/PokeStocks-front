import styled from 'styled-components';
import pokemon from './images/pokemon.png';
import pokeball from './images/pokeball.png';
import stocks from './images/stocks.png';

export default function Logo() {
    return(
        <Container>
            <img src={pokemon} alt="pokemon" />
            <img src={pokeball} alt="img" />
            <img src={stocks} alt="img" />
            <h1>Stock</h1>
        </Container>
    )
}

const Container = styled.div`
    background-color: #F6F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 220px;
    position: relative;
    text-align: center;
    border-radius: 60px;
    box-shadow: 2px 2px 10px #2e3436;

    h1 {
        color: #fecc00;
        text-shadow: 0 0 3px #FF0000, 0px 0px 5px #0000FF;
        font-size: 26px;
        z-index: 2;
        margin-top: 185px;
        font-family: 'Press Start 2P', cursive;
    }

    img, h1 {
        position: absolute;
        top: 0;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto;
    }

    img:first-child {
        width: 300px;
        z-index: 1;
    }

    img:nth-child(2) {
        width: 40px;
        z-index: 2;
        margin-top: 120px;
    }

    img:nth-child(3) {
        width: 100px;
        margin-top: 100px;
    }
`