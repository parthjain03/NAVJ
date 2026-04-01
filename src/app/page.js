"use client";
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';

export default function Home() {
    useEffect(() => {
        // Basic Intersection Observer for the Hero animations if needed
        // The Hero component mostly handles its own load animations
    }, []);

    return (
        <main>
            <Hero />
        </main>
    );
}
