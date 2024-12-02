import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const GoogleReviewsSection = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        const currentRef = widgetRef.current;

        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?9919fc43756a937c9c46f748628';
        script.async = true;
        script.defer = true;
        currentRef.appendChild(script);

        const style = document.createElement('style');
        document.head.appendChild(style);
        style.innerHTML = `
            .ti-widget[data-layout-id='4'][data-set-id='light-background'] .ti-reviews-container-wrapper {
                margin: 0 !important;
                width: 100% !important;
            }
            .ti-verified-by, .ti-verified-by-row { 
                display: none !important;
            }
        `;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    adjustJustifyContent();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        function adjustJustifyContent() {
            const container = document.querySelector('.ti-widget[data-layout-id="4"][data-set-id="light-background"] .ti-reviews-container-wrapper');
            if (container) {
                if (window.innerWidth >= 900) {
                    container.style.justifyContent = 'center';
                } else {
                    container.style.justifyContent = 'flex-start';
                }
            }
        }

        window.addEventListener('resize', adjustJustifyContent);
        adjustJustifyContent();

        return () => {
            document.head.removeChild(style);
            if (currentRef) {
                currentRef.removeChild(script);
            }
            window.removeEventListener('resize', adjustJustifyContent);
            observer.disconnect();
        };
    }, []);

    return (
        <Section className="google-reviews" ref={widgetRef}>
            <ReviewsSectionTitle>Avaliações do Google:</ReviewsSectionTitle>
            <div data-widget-id="9919fc43756a937c9c46f748628"></div>
        </Section>
    );
};

const Section = styled.section`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    font-family: var(--font-roboto);
    color: var(--black-font-color);
`;

const ReviewsSectionTitle = styled.div`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
    text-align: center;
`;