import { useEffect, useRef, useState } from "react";

// Animates a numeric count from 0 to `end` once the element becomes visible.
export default function useCountUp(end, { duration = 1500, decimals = 0 } = {}) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = performance.now();

                    const step = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - (1 - progress) ** 3;
                        setValue(Number((end * eased).toFixed(decimals)));
                        if (progress < 1) requestAnimationFrame(step);
                    };

                    requestAnimationFrame(step);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration, decimals]);

    return { ref, value };
}
