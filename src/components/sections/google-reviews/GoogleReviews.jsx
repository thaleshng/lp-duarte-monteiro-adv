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
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    speed={1000}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {feedbackImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Slide>
                                <img src={img} alt={`Feedback ${index + 1}`} />
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
`;

const DivSlider = styled.div`
    display: flex;
    gap: 30px;
` 

const CustomSwiper = styled(Swiper)`
    max-width: 1140px;

    .swiper-slide {
        opacity: 1;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 230px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

const NavButton = styled.button`
    font-size: 25px;
    cursor: pointer;
`;