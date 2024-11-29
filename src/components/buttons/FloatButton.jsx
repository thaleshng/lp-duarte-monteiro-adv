import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export const FloatButton = () => {
    return (
        <Link 
            href="https://api.whatsapp.com/send?phone=553186370315&text=Ol%C3%A1,%20estou%20com%20um%20problema%20na%20minha%20CNH%20e%20preciso%20de%20ajuda!" 
            target='_blank'
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
    )
}

const Link = styled.a`
    position: fixed;
    bottom: 30px;
    right: 30px; 
    background-color: var(--bg-color-button); 
    color: var(--white-font-color);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; 
    z-index: 1000;
    transition: 0.3s ease-in-out;

    @media (max-width: 767px) {
        bottom: 20px;
        right: 20px;
    }

    &:hover {
        background-color: var(--bg-color-button-hover);
        box-shadow: 0px 4px 12px var(--bg-color-button-hover);
    }
`