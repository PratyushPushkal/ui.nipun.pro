import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import TrustSection from "../components/TrustSection";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
    const ENABLE_CHATBOT = import.meta.env.VITE_ENABLE_CHATBOT === "true";

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Products />
                <Services />
                <WhyChoose />
                <HowItWorks />
                <TrustSection />
                <CTA />
                <Contact />
            </main>
            <Footer />
            {ENABLE_CHATBOT && <ChatBot />}
            <WhatsAppWidget />
        </>
    );
}