import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import reviewImg1 from "../../../assets/images/350x230.svg"
import reviewImg2 from "../../../assets/images/350x230.svg"
import reviewImg3 from "../../../assets/images/350x230.svg"
import styled from "styled-components"

export const GoogleReviewSection = () => {
    const swiperRef = useRef(null);

    const feedbackImages = [
        reviewImg1,
        reviewImg2,
        reviewImg3,
        reviewImg1,
        reviewImg2,
        reviewImg3,
    ];

    return (
        <Section>
            <ReviewSectionTitle>Avaliações do Google:</ReviewSectionTitle>
            <DivSlider>
                <NavButton onClick={() => swiperRef.current?.slidePrev()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </NavButton>
                <CustomSwiper
                    loop={true}
                    speed={1000}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {feedbackImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Slide>
                                <img src={img} alt={`Avaliação do Google ${index + 1}`} />
                            </Slide>
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
                
                <NavButton onClick={() => swiperRef.current?.slideNext()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </NavButton>
            </DivSlider>
        </Section>
    );
};

const Section = styled.section`
    padding: 100px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    font-family: var(--font-roboto);
    color: var(--black-font-color);
`;

const ReviewSectionTitle = styled.div`
    font-family: var(--font-poppins);
    font-size: 40px;
    font-weight: 800;
    text-align: center;
`;

const DivSlider = styled.div`
    display: flex;
    max-width: 1200px;
    overflow: hidden;
    padding: 0 15px;

    @media (max-width: 1024px) {
        max-width: 100vw;
    }
` 

const CustomSwiper = styled(Swiper)`
    width: 100%;
    max-width: 100vw;

    .swiper-slide {
        opacity: 1;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > img {
        width: 350px;
        height: 230px;
        max-width: 100%;
        max-height: 100%;

        @media (max-width: 768px) {
            width: 300px;
        }

        @media (max-width: 350px) {
            width: 250px;
        }
    }
`;

const NavButton = styled.button`
    font-size: 25px;
    cursor: pointer;
    align-self: center;
`;