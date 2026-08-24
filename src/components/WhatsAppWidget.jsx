import "./WhatsAppWidget.css";

export default function WhatsAppWidget() {
    const phone = "9741819765";
    const name = "Nipun";
    const defaultMessage = `Hi ${name}, I would like to connect.`;

    const startWhatsApp = () => {
        const encoded = encodeURIComponent(defaultMessage);
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent || "");

        // On mobile try the whatsapp:// deep link, otherwise open web wa.me fallback
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
        } else {
            window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank", "noopener");
        }
    };

    return (
        <div className="whatsapp-widget">
            <button
                type="button"
                className="whatsapp-launcher"
                aria-label="Open WhatsApp contact"
                onClick={startWhatsApp}
            >
                <i className="bi bi-whatsapp" aria-hidden="true" />
            </button>
        </div>
    );
}
