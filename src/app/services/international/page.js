"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function InternationalPage() {
    useEffect(() => {
        document.title = 'International Services | NAVJ & Co.';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const steps = [
        { num: '01', title: 'Entity Structuring', desc: 'Advising on the optimal legal structure — subsidiary, branch office, liaison office, or LLP — based on your business objectives and regulatory requirements.' },
        { num: '02', title: 'Regulatory Approvals', desc: 'Navigating RBI automatic and government route approvals, FEMA compliance, and sectoral cap requirements for foreign direct investment.' },
        { num: '03', title: 'Tax Registration', desc: 'Complete setup of PAN, TAN, GST registration, and compliance frameworks. Structuring operations for optimal tax efficiency under DTAA provisions.' },
        { num: '04', title: 'Ongoing Compliance', desc: 'Annual filings, transfer pricing documentation, FEMA reporting, and statutory audit. Ensuring continuous compliance as your India operations scale.' },
    ];

    const services = [
        {
            title: 'India Entry Strategy (FDI)',
            desc: 'Comprehensive advisory for foreign companies establishing operations in India. From entity selection and incorporation to regulatory approvals and operational setup, we guide your entry into the Indian market.',
        },
        {
            title: 'NRI Taxation',
            desc: 'Specialized tax advisory for Non-Resident Indians covering residential status determination, DTAA benefits, capital gains on Indian assets, rental income compliance, and repatriation of funds.',
        },
        {
            title: 'Transfer Pricing',
            desc: 'Documentation, benchmarking, and compliance for related-party international transactions under Indian transfer pricing regulations. We ensure arm\'s length pricing and defend positions before tax authorities.',
        },
        {
            title: 'Cross-Border Structuring',
            desc: 'Strategic structuring of international transactions, holding company arrangements, and treaty planning. We optimize cross-border operations while maintaining full regulatory compliance.',
        },
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="py-32 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">International Services</h2>
                    <p className="section-lead">
                        Navigating India's regulatory landscape for global businesses.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '4rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Whether you are a foreign enterprise entering India, an NRI managing assets across borders, or a multinational optimizing transfer pricing, our International Services desk provides end-to-end regulatory and tax advisory rooted in decades of cross-border experience.
                    </p>
                </div>

                {/* India Entry Process */}
                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '5rem' }}>
                    <h3 className="tl-content-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>India Entry: The Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center" style={{ padding: '2rem 1rem' }}>
                                <p style={{
                                    fontFamily: 'var(--font-playfair), serif',
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: 'var(--gold)',
                                    marginBottom: '1rem',
                                    lineHeight: 1
                                }}>{step.num}</p>
                                <p className="tl-content-title" style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>{step.title}</p>
                                <p className="exp-tagline" style={{ fontSize: '0.85rem', marginBottom: 0 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Cards */}
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

                {/* CTA */}
                <div className="text-center fade-in" style={{ marginTop: '5rem' }}>
                    <p className="section-lead" style={{ marginBottom: '2rem' }}>
                        Planning to enter the Indian market?
                    </p>
                    <Link href="/contact" className="btn-agree" style={{ textDecoration: 'none' }}>
                        Schedule a Consultation
                    </Link>
                </div>

                <div className="flex justify-center fade-in" style={{ marginTop: '3rem' }}>
                    <Link href="/services" className="btn-series">
                        ← Back to All Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
