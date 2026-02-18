"use client";
import React, { useEffect } from 'react';
import Leadership from '@/components/Leadership';

export default function LeadershipPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .board-feature-card, .board-partner-card').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <Leadership />
        </main>
    );
}
