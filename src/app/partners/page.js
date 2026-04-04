import React from 'react';
import Leadership from '@/components/Leadership';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Partners',
    description: 'Meet the partners and leadership team at NAVJ & Co., Chartered Accountants with decades of experience in taxation, audit, and advisory.',
    openGraph: {
        title: 'Partners | NAVJ & Co.',
        description: 'Meet the partners and leadership team at NAVJ & Co.',
        url: 'https://navjco.com/partners',
    },
};

export default function PartnersPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver selectors=".fade-in, .board-feature-card, .board-partner-card" />
            <Leadership />
        </main>
    );
}
