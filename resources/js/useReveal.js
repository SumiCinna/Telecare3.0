import { useEffect } from 'react';

export default function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('on'), i * 60);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}