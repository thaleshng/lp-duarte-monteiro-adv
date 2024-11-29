import styled from "styled-components"

export const ResourcesSection = () => {
    return (
        <Section>
            <ResourcesSectionTitle>É POSSÍVEL RECORRER EM 100% DOS CASOS</ResourcesSectionTitle>
            <DivInfos>
                <p>Não desista da sua Carteira Nacional de Habilitação sem lutar.</p>
                <p>É possível contestar sua multa e recuperar seu direito de dirigir.</p>
            </DivInfos>
            <DivResources>
                <ResourcesOptions>O Código de Trânsito Brasileiro (CTB) oferece três oportunidades para recursos administrativos que podem anular sua multa:</ResourcesOptions>
                <Resources>
                    <Resource>
                        <ResourceTitle>1 - Defesa Prévia</ResourceTitle>
                        <ResourceDescription>Apresentar defesa prévia dentro de 30 dias após receber a notificação da multa.</ResourceDescription>
                    </Resource>
                    <Resource>
                        <ResourceTitle>2 – Recurso à JARI</ResourceTitle>
                        <ResourceDescription>Recorrer à JARI dentro de 30 Dias.</ResourceDescription>
                    </Resource>
                    <Resource>
                        <ResourceTitle>3 – Recurso ao CETRAN</ResourceTitle>
                        <ResourceDescription>Recurso em 2ª instância ao Conselho Estadual de Trânsito dentro de 30 dias.</ResourceDescription>
                    </Resource>
                </Resources>
            </DivResources>
            <FinalTitleSection>Além disso, é possível também ingressar na via judicial para reverter decisões administrativas!</FinalTitleSection>
        </Section>
    )
}

const Section = styled.section`
    padding: 100px 0;

    background-color: var(--primary-bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    font-family: var(--font-roboto);
    color: var(--white-font-color);

    @media (max-width: 767px) {
        padding: 50px 15px;
    }
`

const ResourcesSectionTitle = styled.h2`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
    text-align: center;
`

const DivInfos = styled.div`
    text-align: center;
    font-size: 22px;
    font-weight: 400;
`

const DivResources = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1140px;
`

const ResourcesOptions = styled.p`
    text-align: center;
    font-size: 22px;
    font-weight: 400;
`

const Resources = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    text-align: center;

    @media (max-width: 767px) {
        gap: 30px;
    }
`

const Resource = styled.fieldset`
    width: 360px;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative;
    flex-basis: 1;

    @media (max-width: 375px) {
        width: 300px;
    }

    border-radius: 20px;
`

const ResourceTitle = styled.legend`
    font-family: var(--font-poppins);
    color: var(--primary-font-color);
    font-weight: 400;

    padding: 0 10px;

    position: absolute;
    top: -10px;
    left: 30px;
    background-color: var(--primary-bg-color);
`

const ResourceDescription = styled.p`
    padding: 34px 0;
`

const FinalTitleSection = styled.h3`
    font-size: 28px;
    font-weight: 800;
    color: var(--primary-font-color);
    text-align: center;

    max-width: 1140px; 
`