import styled from "styled-components"
import profissionalImage from "../../../assets/images/imagem-advogado.webp"
import { ContactButton } from "../../buttons/ContactButton"

export const AboutSection = () => {
    return (
        <Section>
            <AboutSectionTitle>Apresentação</AboutSectionTitle>
            <DivAbout>
                <img src={profissionalImage} alt="Imagem do Advogado da Duarte Monteiro Advogados" />
                <DivAboutInformation>
                    <p>Olá, sou Luan Monteiro, e minha missão é garantir que você possa dirigir com tranquilidade, sem se preocupar com as burocracias da sua CNH!</p>
                    <p>O escritório Duarte Monteiro Advogados é referência em inovação no setor jurídico, combinando modernidade e eficiência para melhor atender nossos clientes.</p>
                    <p>Nosso compromisso é com a excelência: oferecemos um atendimento ágil, transparente e humanizado, eliminando complicações desnecessárias.</p>
                    <p>Aliando nossa expertise ao uso da tecnologia, conseguimos acelerar processos tanto no âmbito judicial quanto administrativo, sempre focados na solução mais eficaz para cada situação.</p>
                    <p>NOSSA ESPECIALIDADE É A SOLUÇÃO!</p>
                </DivAboutInformation>
            </DivAbout>
            <ContactButton />
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0;

    background-color: var(--primary-bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    font-family: var(--font-roboto);
    color: var(--white-font-color);
`

const AboutSectionTitle = styled.h2`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
`

const DivAbout = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 0 15px;

    @media (max-width: 820px) {
        flex-direction: column;
    }

    & > img {
        width: 360px;
        height: 368px;

        border-radius: 10px;
        
        @media (max-width: 820px) {
            width: 68%;
            height: 68%;
        }
    }
`

const DivAboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 630px;

    @media (max-width: 768px) {
        max-width: 70%;
    }

    & > p {
        font-size: 18px; 
        font-weight: 400;
        line-height: 28px;

        @media (max-width: 768px) {
            text-align: justify;
            line-height: normal;
        }

        @media (max-width: 375px) {
            text-align: center;
            line-height: normal;
        }
    }

    & > p:last-child {
        font-weight: 600;
    }
`