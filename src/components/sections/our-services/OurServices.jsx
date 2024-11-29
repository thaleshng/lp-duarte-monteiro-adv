import styled from "styled-components"
import service1Img from "../../../assets/images/1-1.webp"
import service2Img from "../../../assets/images/2-1.png"
import service3Img from "../../../assets/images/3-1.png"
import service4Img from "../../../assets/images/4-1.webp"
import service5Img from "../../../assets/images/5.png"
import service6Img from "../../../assets/images/6.png"

export const ServicesSection = () => {
    return (
        <Section>
            <ServicesSectionTitle>Em que mais podemos te ajudar?</ServicesSectionTitle>
            <DivServices>
                <DivService>
                    <img src={service1Img} alt="Imagem de uma Carteira de Habilitação suspensa" />
                    <p>RECUPERAMOS SUA CNH SUSPENSA OU CASSADA</p>
                </DivService>
                <DivService>
                    <img src={service2Img} alt="Imagem de um condutor fazendo o teste do bafômetro" />
                    <p>RECORREMOS A MULTAS DO BAFÔMETRO</p>
                </DivService>
                <DivService>
                    <img src={service3Img} alt="Imagem de um guarda de trânsito multando um condutor" />
                    <p>EQUIPE ESPECIALIZADA EM RECURSOS DE MULTAS DE TRÂNSITO</p>
                </DivService>
                <DivService>
                    <img src={service4Img} alt="Imagem de um condutor récem habilitado mostrando sua Carteira de Habilitação Provisória" />
                    <p>CNH PROVISÓRIA? EVITAMOS QUE PERCA SEU DIREITO DE DIRIGIR!</p>
                </DivService>
                <DivService>
                    <img src={service5Img} alt="Imagem de um Agente de Trânsito conferindo multas que excedem os pontos da Carteira de Habilitação" />
                    <p>EXCESSO DE PONTOS? REGULARIZAMOS SUA CNH!</p>
                </DivService>
                <DivService>
                    <img src={service6Img} alt="Imagem indicando uma trasferência de pontos na Carteira de Habilitação de um condutor para outro" />
                    <p>TRANSFERÊNCIA DE PONTUAÇÃO ADMINISTRATIVA E JUDICIAL!</p>
                </DivService>
            </DivServices>
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0;

    background-color: var(--secondary-bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    font-family: var(--font-roboto);
    color: var(--black-font-color);
`

const ServicesSectionTitle = styled.h2`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
`

const DivServices = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    max-width: 1120px;
`

const DivService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    width: 350px;

    & > img {
        width: 180px;
        height: 180px;
    }

    & > p {
        font-weight: 600;
        font-style: italic;
    }
`