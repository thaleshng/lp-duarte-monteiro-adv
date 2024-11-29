import { FaqSection } from "../sections/faq/Faq"
import { AboutSection } from "../sections/about/About"
import { CustomerFeedbackSection } from "../sections/customer-feedback/CustomerFeedback"
import { GoogleReviewSection } from "../sections/google-reviews/GoogleReviews"
import { Hero } from "../sections/hero/Hero"
import { ServicesSection } from "../sections/our-services/OurServices"
import { ResourcesSection } from "../sections/resources/Resources"

export const MainContent = () => {
    return (
        <main>
            <Hero />
            <ResourcesSection />
            <ServicesSection />
            <AboutSection />
            <CustomerFeedbackSection />
            <GoogleReviewSection />
            <FaqSection />
        </main>
    )
}
