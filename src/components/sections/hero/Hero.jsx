import styled from "styled-components"
import logo from "../../../assets/images/logo.png"
import scrollDownImg from "../../../assets/images/Siga-em-frente.webp"
import bgImage from "../../../assets/images/bg-carro-em-movimento.jpg"

import { ContactButton } from "../../button/Button"

export const Hero = () => {
    return (
        <HeroContent>
            <h1><LogoImg src={logo} alt="" /></h1>
            <div>
                <HeroTitle>CNH SUSPENSA OU CASSADA?</HeroTitle>
                <HeroDescription>Fale com advogado especialista em trânsito para resolver o seu caso.</HeroDescription>
            </div>
            <HeroSubtext>Somos referência em Recursos de Multas de Trânsito em Minas Gerais!</HeroSubtext>
            <ContactButton />
            <ScrollDownImg src={scrollDownImg} alt="" />
        </HeroContent>
    )
}

const HeroContent = styled.section`
    background: 
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${bgImage});
    background-size: cover;

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align:center;
    font-family: var(--font-poppins);
`

const LogoImg = styled.img`
    width: 300px;
    height: 300px;
`

const HeroTitle = styled.h2`
    font-size: 56px;
    font-weight: 800;
    color: var(--primary-font-color);

    margin-bottom: 8px;
`

const HeroDescription = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: var(--secondary-font-color);
`

const HeroSubtext = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: var(--white-font-color);
`

const ScrollDownImg = styled.img`
    width: 150px;

    animation: scrolldown infinite alternate 0.6s ease-in-out;
`