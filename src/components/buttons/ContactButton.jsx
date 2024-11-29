import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export const ContactButton = () => {
    return (
        <Link 
            href="https://api.whatsapp.com/send?phone=553186370315&text=Ol%C3%A1,%20estou%20com%20um%20problema%20na%20minha%20CNH%20e%20preciso%20de%20ajuda!" 
            target='_blank'
        >
            <FontAwesomeIcon icon={faWhatsapp} />
            Falar com Advogado!
        </Link>
    )
}

const Link = styled.a`
    display: flex;
    gap: 15px;

    font-family: var(--font-roboto);
    font-size: 20px;
    color: var(--white-font-color);
    font-weight: 600;

    padding: 15px 80px;
    background-color: var(--bg-color-button);
    border-radius: 100px;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;

    @media (max-width: 500px) {
        padding: 15px 45px;
        font-size: 18px;
    }

    @media (max-width: 450px) {
        padding: 15px 40px;
    }

    @media (max-width: 375px) {
        padding: 15px 35px;
        font-size: 16px;
    }

    @media (max-width: 350px) {
        font-size: 14px;
    }

    &:hover {
        background-color: #20B75D;
        box-shadow: 0px 4px 12px var(--bg-color-button-hover);
    }
`