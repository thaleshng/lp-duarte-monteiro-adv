import styled from "styled-components"
import profissionalImage from "../../../assets/images/imagem-advogado.webp"
import { ContactButton } from "../../button/Button"

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
    gap: 50px;

    & > img {
        width: 360px;
        height: 368px;

        border-radius: 10px; 
    }
`

const DivAboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    max-width: 630px;

    & > p {
        font-size: 18px; 
        font-weight: 400;
        line-height: 28px;
    }

    & > p:last-child {
        font-weight: 600;
    }
`