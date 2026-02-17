"use client";
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Legacy from '@/components/Legacy';
import Expertise from '@/components/Expertise';
import Media from '@/components/Media';
import Leadership from '@/components/Leadership';

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(
            '.fade-in, .timeline-item, .board-partner-card, .board-feature-card, .expertise-card'
        ).forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <Legacy />
            <Expertise />
            <Media />
            <Leadership />
        </main>
    );
}
