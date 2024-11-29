import styled from "styled-components"

export const Footer = () => {
    return (
        <TagFooter>
            <DivFooterContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503525.814574206!2d-45.088197!3d-18.436471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1732839846519!5m2!1spt-BR!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Minas Gerais, Brasil"
                ></iframe>
                <DivFooterContact>
                    <FooterTitle>contato</FooterTitle>
                    <p>Estamos localizados em Minas Gerais e atendemos todo território nacional.</p>
                    <ContactInformation>WhatsApp: (31) 98637-0315</ContactInformation>
                </DivFooterContact>
            </DivFooterContainer>
        </TagFooter>
    )
}

const TagFooter = styled.footer`
    padding: 50px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-roboto);
    color: var(--black-font-color);
`

const DivFooterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 15px;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    & > iframe {
        width: 550px;
        height: 300px;
        border: none;

        @media (max-width: 550px) {
            width: 100%;
            /* height: 100%; */
        }
    }
`

const DivFooterContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: center;
`

const FooterTitle = styled.h2`
    font-family: var(--font-poppins);
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
`

const ContactInformation = styled.p`
    font-size: 20px;
    font-weight: 600;
`