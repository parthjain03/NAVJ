"use client";
import React, { useEffect } from 'react';
import Legacy from '@/components/Legacy';

export default function AboutPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <Legacy />
        </main>
    );
}
