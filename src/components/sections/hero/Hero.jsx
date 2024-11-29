import styled from "styled-components"

import logo from "../../../assets/images/logo.png"
import scrollDownImg from "../../../assets/images/Siga-em-frente.webp"
import bgImage from "../../../assets/images/bg-carro-em-movimento.jpg"
import bgImageMobile from "../../../assets/images/bg-mobile.webp"

import { ContactButton } from "../../buttons/ContactButton"

export const Hero = () => {
    return (
        <HeroContent>
            <h1><LogoImg src={logo} alt="Logo da Duarte Monteiro Advogados" /></h1>
            <div>
                <HeroTitle>CNH SUSPENSA OU CASSADA?</HeroTitle>
                <HeroDescription>Fale com advogado especialista em trânsito para resolver o seu caso.</HeroDescription>
            </div>
            <HeroSubtext>Somos referência em Recursos de Multas de Trânsito em Minas Gerais!</HeroSubtext>
            <ContactButton />
            <ScrollDownImg src={scrollDownImg} alt="Imagem de Placa de Trânsito com uma seta apontando para baixo" />
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

    @media (max-width: 767px) {
        background: 
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url(${bgImageMobile});
        background-size: cover;
        padding: 0 15px;
    }

    & > h1 {
        width: 300px;
        height: 300px;

        @media (max-width: 375px) {
            width: 200px;
            height: 200px;
        }
    }
`

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`

const HeroTitle = styled.h2`
    font-size: 56px;
    font-weight: 800;
    color: var(--primary-font-color);

    margin-bottom: 8px;

    @media (max-width: 550px) {
        font-size: 40px;
    }

    @media (max-width: 375px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
`

const HeroDescription = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: var(--secondary-font-color);

    @media (max-width: 550px) {
        font-size: 20px;
    }

    @media (max-width: 375px) {
        font-size: 16px;
    }
`

const HeroSubtext = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: var(--white-font-color);

    @media (max-width: 550px) {
        font-size: 20px;
    }

    @media (max-width: 375px) {
        font-size: 16px;
    }
`

const ScrollDownImg = styled.img`
    width: 150px;
    height: 120px;

    animation: scrolldown infinite alternate 0.6s ease-in-out;
`