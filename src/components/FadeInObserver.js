"use client";
import { useEffect } from 'react';

export default function FadeInObserver({ selectors = '.fade-in' }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(selectors).forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [selectors]);
    return null;
}
