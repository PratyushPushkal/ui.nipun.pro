import { useEffect, useRef, useState } from "react";
import { Button, Input } from "reactstrap";
import "./ChatBot.css";

const WELCOME_MESSAGE = {
    id: "welcome",
    role: "assistant",
    text: "Hi! I'm Nipun AI Agent. Ask me about our products, services, or how we can help your business.",
};

const SUGGESTIONS = [
    "What products do you offer?",
    "Tell me about Reputation Management",
    "How can I request a demo?",
];

// Replace this with a call to your Azure AI Agent Service / Azure OpenAI Assistants endpoint.
async function sendMessageToAgent(message, history) {
    const response = await fetch("/api/agent/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message,
            // Send prior turns so the Azure agent thread can maintain context.
            history: history.map(({ role, text }) => ({ role, text })),
        }),
    });

    if (!response.ok) {
        throw new Error(`Agent request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.reply ?? "Sorry, I couldn't process that right now.";
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState("");
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping, isOpen]);

    // Auto-open chat 5 seconds after the page/component loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleSend = async (textOverride) => {
        const text = (textOverride ?? input).trim();
        if (!text || isTyping) return;

        const userMessage = { id: crypto.randomUUID(), role: "user", text };
        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages);
        setInput("");
        setError("");
        setIsTyping(true);

        try {
            const reply = await sendMessageToAgent(text, nextMessages);
            setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", text: reply }]);
        } catch {
            setError("The assistant is unavailable right now. Please try again shortly.");
        } finally {
            setIsTyping(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSend();
    };

    return (
        <div className="chatbot-widget">
            {isOpen && (
                <div className="chatbot-panel" role="dialog" aria-label="Nipun Digital Employee chat">
                    <div className="chatbot-panel__header">
                        <div className="chatbot-panel__identity">
                            <span className="chatbot-avatar">
                                <i className="bi bi-stars" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="chatbot-panel__name">Nipun Digital Employee</p>
                                <p className="chatbot-panel__status">
                                    <span className="status-dot" /> Online
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="chatbot-panel__close"
                            aria-label="Close chat"
                            onClick={() => setIsOpen(false)}
                        >
                            <i className="bi bi-x-lg" />
                        </button>
                    </div>

                    <div className="chatbot-panel__body" ref={scrollRef}>
                        {messages.map((message) => (
                            <div key={message.id} className={`chat-bubble chat-bubble--${message.role}`}>
                                {message.text}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="chat-bubble chat-bubble--assistant chat-bubble--typing" aria-live="polite">
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                            </div>
                        )}

                        {error && <div className="chatbot-panel__error">{error}</div>}

                        {messages.length === 1 && !isTyping && (
                            <div className="chatbot-suggestions">
                                {SUGGESTIONS.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        className="chatbot-suggestion"
                                        onClick={() => handleSend(suggestion)}
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <form className="chatbot-panel__footer" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Type your message..."
                            aria-label="Type your message"
                            autoComplete="off"
                        />
                        <Button color="primary" type="submit" className="chatbot-send" disabled={!input.trim() || isTyping}>
                            <i className="bi bi-send-fill" />
                        </Button>
                    </form>
                </div>
            )}

            <button
                type="button"
                className="chatbot-launcher"
                aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-chat-dots-fill"}`} aria-hidden="true" />
            </button>
        </div>
    );
}
