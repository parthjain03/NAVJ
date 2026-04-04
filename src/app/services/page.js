import React from 'react';
import Expertise from '@/components/Expertise';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Services',
    description: 'Explore NAVJ & Co.\'s four core practice areas: Taxation & GST, Audit & Assurance, Advisory, and International Services, delivered with 90+ years of expertise.',
    openGraph: {
        title: 'Services | NAVJ & Co.',
        description: 'Taxation, Audit, Advisory, and International Services from a premier New Delhi CA firm.',
        url: 'https://navjco.com/services',
    },
};

export default function ServicesPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver selectors=".fade-in, .expertise-card" />
            <Expertise />
        </main>
    );
}
