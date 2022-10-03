import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineStock, AiFillQuestionCircle } from "react-icons/ai";
import { MdWork, MdCatchingPokemon } from "react-icons/md";
import { GiSwordsEmblem, GiTrophy, GiBookmarklet, GiRollingDices, GiFlyingFlag } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Home() {
    return(
        <Container>
            <Logo />
            <main>
                <StyledLink to="/">
                    <AiOutlineStock />
                    <p>Market</p>
                </StyledLink>
                <StyledLink to="/">
                    <MdWork />
                    <p>Jobs</p>
                </StyledLink>
                <StyledLink to="/">
                    <GiSwordsEmblem />
                    <p>Battle</p>
                </StyledLink>
                <StyledIcognito to="/">
                    <AiFillQuestionCircle />
                    <p>???</p>
                </StyledIcognito>
                <StyledIcognito to="/">
                    <AiFillQuestionCircle />
                    <p>???</p>
                </StyledIcognito>
                {/* <StyledLink to="/">
                    <MdCatchingPokemon />
                    <p>Deck</p>
                </StyledLink> */}
                {/* <StyledLink to="/">
                    <GiTrophy />
                    <p>Achievements</p>
                </StyledLink> */}
                <StyledLink to="/">
                    <GiBookmarklet />
                    <p>Album</p>
                </StyledLink>
                <StyledIcognito to="/">
                    <AiFillQuestionCircle />
                    <p>???</p>
                </StyledIcognito>
                <StyledIcognito to="/">
                    <AiFillQuestionCircle />
                    <p>???</p>
                </StyledIcognito>
                {/* <StyledLink to="/">
                    <GiRollingDices />
                    <p>Lottery</p>
                </StyledLink> */}
                {/* <StyledLink to="/">
                    <GiFlyingFlag />
                    <p>Missions</p>
                </StyledLink> */}
                <StyledLink to="/">
                    <IoPersonCircle />
                    <p>Profile</p>
                </StyledLink>
            </main>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    background-color: #dc0a2d;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    main {
        background-color: aliceblue;
        width: 500px;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        border-radius: 60px;
        box-shadow: 2px 2px 10px #2e3436;
    }

    main > * {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px;
    }

    main > * :first-child {
        font-size: 34px;
        margin-bottom: 5px;
    }
`

const StyledLink  = styled(Link)`
    text-decoration: none;
    color: #dc0a2d;
    text-shadow: 0 0 5px #f0bb42, 0 0 3px #0868A5;
    width: 120px;
`;

const StyledIcognito = styled(Link)`
    text-decoration: none;
    color: #1A0E04;
    text-shadow: 0 0 5px black;
    width: 120px;
`;