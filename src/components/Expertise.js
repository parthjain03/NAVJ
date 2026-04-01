import React from 'react';
import Link from 'next/link';

export default function Expertise() {
    const services = [
        {
            num: 'I',
            title: 'Taxation & GST',
            tagline: 'Comprehensive compliance management for direct and indirect taxes. We handle Income Tax representation, Appeals, and end-to-end GST lifecycles, from registration to complex notice handling and advisory.',
            href: '/services/taxation',
            subServices: [
                'Income tax advisory and litigation',
                'GST compliance and litigation',
                'Corporate Taxation & Advisory',
                'TDS consultancy'
            ]
        },
        {
            num: 'II',
            title: 'Audit & Assurance',
            tagline: 'Delivering financial clarity through Statutory, Internal, and Tax Audits. Our approach ensures rigorous compliance with Indian Accounting Standards (Ind AS) and regulatory frameworks.',
            href: '/services/audit',
            subServices: [
                'Concurrent Audit',
                'Inventory Audit',
                'System Audit',
                'Special Audit'
            ]
        },
        {
            num: 'III',
            title: 'Advisory & FEMA',
            tagline: 'Beyond accounting, we design financial infrastructures. Specializing in FEMA compliance, corporate advisory, system development, and Virtual CFO services for growing businesses.',
            href: '/services/advisory',
        },
        {
            num: 'IV',
            title: 'International Services',
            tagline: 'Strategic guidance for India Entry (FDI), NRI taxation, transfer pricing, and cross-border structuring. We empower global businesses to navigate India\'s regulatory landscape.',
            href: '/services/international',
            highlight: true,
        },
    ];

    return (
        <section id="expertise">
            <div className="section-header fade-in">
                <span className="section-eyebrow">Practice Areas</span>
                <h2 className="section-title">Expertise</h2>
                <p className="section-lead">Four institutional disciplines. One integrated practice.</p>
                <div className="gold-rule"></div>
            </div>

            <div className="expertise-grid">
                <style jsx>{`
                @media (min-width: 900px) {
                    .expertise-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                .sub-services-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0.75rem;
                    margin: 1.5rem 0;
                }
                .sub-service-pill {
                    font-size: 0.8125rem;
                    color: var(--navy);
                    background: var(--cream);
                    border: 1px solid rgba(197, 160, 89, 0.2);
                    padding: 0.5rem 0.75rem;
                    border-radius: 4px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .sub-service-pill::before {
                    content: '✦';
                    color: var(--gold);
                    font-size: 0.7rem;
                }
            `}</style>

                {services.map((svc) => (
                    <div key={svc.num} className={`expertise-card ${svc.highlight ? 'usp' : ''}`}>
                        <p className="exp-number">{svc.num}</p>
                        <h3 className="exp-title">{svc.title}</h3>
                        <div className="exp-rule"></div>
                        <p className="exp-tagline">{svc.tagline}</p>
                        
                        {svc.subServices && (
                            <div className="sub-services-grid">
                                {svc.subServices.map((sub) => (
                                    <div key={sub} className="sub-service-pill">
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        )}

                        <Link href={svc.href} className="btn-series" style={{ marginTop: 'auto' }}>
                            Learn More
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
