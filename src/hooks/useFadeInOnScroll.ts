import { useRef, useEffect } from "react";

export default function useFadeInOnScroll<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.classList.remove("opacity-0", "translate-y-6");
                    element.classList.add("opacity-100", "translate-y-0");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return ref;
}