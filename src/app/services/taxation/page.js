import React from 'react';
import Link from 'next/link';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Taxation',
    description: 'Income Tax advisory, corporate tax planning, TDS compliance, and appellate representation before CIT(A) and ITAT from expert Chartered Accountants in New Delhi.',
    openGraph: {
        title: 'Taxation | NAVJ & Co.',
        description: 'Income Tax planning, corporate tax advisory, TDS compliance, and litigation from CA firm in New Delhi.',
        url: 'https://navjco.com/services/taxation',
    },
};

const services = [
    {
        title: 'Income Tax Advisory & Litigation',
        desc: 'Strategic tax planning, return preparation, and robust representation before appellate authorities including CIT(A) and ITAT.',
    },
    {
        title: 'Corporate Taxation & Advisory',
        desc: 'Comprehensive advisory services tailored for corporate entities to minimise tax liabilities and ensure strict adherence to direct tax laws.',
    },
    {
        title: 'TDS Consultancy',
        desc: 'Expert guidance on Tax Deducted at Source compliance, reconciliation, and timely return filing to prevent regulatory penalties.',
    },
    {
        title: 'Tax Planning & Structuring',
        desc: 'Proactive structuring of transactions, investments, and business arrangements to achieve tax efficiency within the bounds of applicable law.',
    },
];

export default function TaxationPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />
            <section className="py-16 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">Taxation</h2>
                    <p className="section-lead">
                        Strategic direct tax compliance, planning, and representation.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '2rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Our taxation practice covers the full spectrum of direct tax obligations for individuals, firms, and corporates. From return preparation and proactive planning to appellate representation before the highest tribunals, we provide precise, strategic, and commercially aware tax advisory.
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
