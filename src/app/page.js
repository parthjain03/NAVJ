import React from 'react';
import Hero from '@/components/Hero';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'NAVJ & Co. | Chartered Accountants, Est. 1932, New Delhi',
    description: 'Four generations of financial stewardship since 1932. NAVJ & Co. is a premier CA firm in New Delhi offering Taxation, Audit, Advisory, and International Services.',
    openGraph: {
        title: 'NAVJ & Co. | Chartered Accountants, Est. 1932',
        description: 'Four generations of financial stewardship since 1932. Premier CA firm in New Delhi.',
        url: 'https://navjco.com',
        type: 'website',
    },
};

export default function Home() {
    return (
        <main>
            <FadeInObserver />
            <Hero />
        </main>
    );
}
