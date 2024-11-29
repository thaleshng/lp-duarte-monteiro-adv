import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ContactButton } from "../../buttons/ContactButton";
import { useState } from "react";

export const FaqSection = () => {
    const [expanded, setExpanded] = useState("item-1");

    const faqItems = [
        {
            id: "item-1",
            question: "Recebi uma multa por dirigir sem CNH e o carro está em nome de outra pessoa. Posso fazer alguma coisa?",
            answer: "Sim. Você pode ANULAR essa multa indicando um condutor habilitado, MESMO QUE JÁ TENHA ENCERRADO O PRAZO.",
        },
        {
            id: "item-2",
            question: "Estou com minha CNH bloqueada por suspensão/cassação por excesso de pontos. Consigo resolver?",
            answer: "Sim. É possível desbloquear a CNH através de uma estratégia jurídica chamada AIC. Pergunte-me como.",
        },
        {
            id: "item-3",
            question: "Recebi uma multa e estou no limite de pontuação. Posso recorrer?",
            answer: "Sim. É possível recorrer e evitar que ocorra a suspensão da CNH.",
        },
        {
            id: "item-4",
            question: "É possível transferir os pontos quando já constam no prontuário?",
            answer: "Administrativamente não, somente de forma judicial se houver causa justa e comprovada.",
        },
        {
            id: "item-5",
            question: "Consigo desbloquear minha CNH suspensa ou cassada, mesmo já tendo finalizado o prazo?",
            answer: "Sim, é possível ingressar com um processo e reverter a suspensão e a cassação usando uma estratégia muito eficiente que pode ser aplicada em alguns casos.\n\nSe você está com a sua CNH Cassada ou Suspensa, há uma boa chance de resolvermos o seu caso e providenciar o pronto desbloqueio.\n\nPara saber mais detalhes CLIQUE AGORA no botão do WhatsApp aqui do lado e peça prioridade no nosso plantão de atendimento.",
        },
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Section>
            <FaqSectionTitle>Dúvidas Frequentes</FaqSectionTitle>
            <DivAccordion>
                {faqItems.map((item, index) => (
                    <StyledAccordion 
                        key={item.id} 
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <FontAwesomeIcon
                                icon={expanded === item.id ? faChevronDown : faChevronRight}
                                className="accordion-icon"
                            />
                            <Typography 
                                variant="h6" 
                                component="div"
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: 'var(--white-font-color)',
                                    textTransform: 'uppercase',
                                    marginLeft: '10px',
                                }}
                            >
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography 
                                sx={{
                                    fontSize: '16px',
                                    color: 'var(--black-font-color)',
                                    fontWeight: '600',
                                    whiteSpace: 'pre-line',
                                }}
                            >{item.answer}</Typography>
                        </AccordionDetails>
                    </StyledAccordion>
                ))}
            </DivAccordion>
            <ContactButton />
        </Section>
    );
};

const Section = styled.section`
    padding: 100px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: var(--font-roboto);
    color: var(--white-font-color);
    background-color: var(--primary-bg-color);
`;

const FaqSectionTitle = styled.h2`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
`;

const DivAccordion = styled.div`
    margin-bottom: 40px;
    padding: 0 15px;
`

const StyledAccordion = styled(Accordion)`
    background-color: var(--primary-bg-color);
    border: 1px solid var(--accordion-border-color);

    &:before {
        display: none;
    }

    & .MuiAccordionSummary-root {
        background-color: var(--primary-bg-color);
        color: var(--white-font-color);
        font-weight: 600;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        display: flex;
        align-items: center; 

        &:hover {
            background-color: var(--accordion-bg-color-hover);
        }

        & .MuiAccordionSummary-content {
            align-items: center;
            display: flex;
            gap: 10px; 
            margin: 0;
        }

        &.Mui-expanded {
            margin: 0;
        }

        & svg {
            font-size: 16px;
            width: 16px;
            height: 16px;
            color: var(--primary-font-color);
            transition: transform 0.3s ease-in-out;
        }

        & .accordion-icon {
            width: 16px;
            height: 16px;
            font-size: 16px;
            color: var(--primary-font-color);
            transition: transform 0.3s ease-in-out;
        }
    }

    & .MuiAccordionDetails-root {
        padding: 15px 20px;
        background-color: var(--secondary-bg-color);
        color: var(--black-font-color);
    }
`;
