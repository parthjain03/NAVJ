"use client";
import React, { useEffect } from 'react';
import Media from '@/components/Media';

export default function MediaPage() {
    useEffect(() => {
        document.title = 'Media & Insights | NAVJ & Co.';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .media-feature, .gallery-strip').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <Media />
        </main>
    );
}
