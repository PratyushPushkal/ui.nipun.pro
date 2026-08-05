import { useEffect, useRef, useState } from "react";

// Adds a "is-visible" class once the element scrolls into view, powering fade-in animations.
export default function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15, ...options }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible };
}
