import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

export default function Home() {
    const ENABLE_CHATBOT = import.meta.env.VITE_ENABLE_CHATBOT === "true";

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <TrustSection />
                <Products />
                <Services />
                <WhyChoose />
                <CTA />
                <Contact />
            </main>
            <Footer />
            {ENABLE_CHATBOT && <ChatBot />}
        </>
    );
}