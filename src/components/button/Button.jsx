import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export const ContactButton = () => {
    return (
        <Link href=""><FontAwesomeIcon icon={faWhatsapp} />Falar com advogado!</Link>
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

    &:hover {
        background-color: #20B75D;
        box-shadow: 0px 4px 12px rgba(0, 128, 64, 0.6);
    }
`