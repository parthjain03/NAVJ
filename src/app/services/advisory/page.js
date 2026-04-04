import React from 'react';
import Link from 'next/link';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Advisory',
    description: 'Corporate advisory, FEMA compliance and advisory, system development, and Virtual CFO services. Strategic financial counsel for businesses navigating complexity.',
    openGraph: {
        title: 'Advisory | NAVJ & Co.',
        description: 'Corporate advisory, FEMA compliance, Virtual CFO and system development services in New Delhi.',
        url: 'https://navjco.com/services/advisory',
    },
};

const services = [
    {
        title: 'Corporate Advisory',
        desc: 'Strategic financial advisory for businesses at every stage, from incorporation and structuring to mergers, demergers, and restructuring. We help organisations make informed financial decisions aligned with their growth trajectory.',
    },
    {
        title: 'FEMA Advisory',
        desc: 'End-to-end advisory on Foreign Exchange Management Act regulations, including FDI reporting, ECB compliance, overseas direct investment, and LRS transactions. We ensure your cross-border transactions meet all RBI requirements.',
    },
    {
        title: 'System Development & EDI',
        desc: 'Beyond accounting, we design financial infrastructures. Specialising in process improvement, ERP integration, and Electronic Data Interchange (EDI) mapping (850/810) for global supply chains.',
    },
    {
        title: 'Virtual CFO Services',
        desc: 'Comprehensive financial leadership for growing businesses without the overhead of a full-time CFO. Our Virtual CFO services include financial planning, MIS reporting, cash flow management, and board-level financial strategy.',
    },
];

export default function AdvisoryPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />
            <section className="py-16 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">Advisory</h2>
                    <p className="section-lead">
                        Strategic counsel for complex financial and regulatory landscapes.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '2rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Our advisory practice combines regulatory expertise with strategic financial thinking. From FEMA compliance and corporate restructuring to digital infrastructure and Virtual CFO services, we provide the guidance businesses need to navigate complexity with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((svc, i) => (
                        <div key={i} className="expertise-card fade-in">
                            <p className="exp-number">{['I', 'II', 'III', 'IV'][i]}</p>
                            <h3 className="exp-title">{svc.title}</h3>
                            <div className="exp-rule"></div>
                            <p className="exp-tagline">{svc.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center fade-in" style={{ marginTop: '2.5rem' }}>
                    <Link href="/services" className="btn-series">
                        Back to All Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
