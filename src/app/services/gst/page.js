import React from 'react';
import Link from 'next/link';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'GST & Indirect Tax',
    description: 'End-to-end GST compliance in India: registration, return filing, input tax credit optimisation, GST audit, departmental notices, and indirect tax litigation.',
    openGraph: {
        title: 'GST & Indirect Tax | NAVJ & Co.',
        description: 'Comprehensive GST lifecycle management, ITC optimisation, and indirect tax litigation from New Delhi CA firm.',
        url: 'https://navjco.com/services/gst',
    },
};

const services = [
    {
        title: 'GST Registration & Structuring',
        desc: 'Advisory on GST registration obligations across states, composition scheme eligibility, and structuring of business operations for optimal GST treatment.',
    },
    {
        title: 'Return Filing & Reconciliation',
        desc: 'Accurate and timely preparation and filing of all GST returns including GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C, with thorough reconciliation of books, returns, and Form 26AS.',
    },
    {
        title: 'Input Tax Credit Optimisation',
        desc: 'Systematic review and maximisation of eligible input tax credit claims, identification of blocked credit, and reconciliation of credit with supplier returns to prevent leakages.',
    },
    {
        title: 'GST Audit & Health Check',
        desc: 'Comprehensive review of GST compliance posture, identification of gaps and misclassifications, and preparation for departmental scrutiny. Includes annual GST audit under Section 35(5).',
    },
    {
        title: 'Notices, Assessments & Litigation',
        desc: 'Expert representation in response to GST show cause notices, scrutiny assessments, and adjudication proceedings. Our litigation practice covers the full dispute lifecycle, from initial departmental response through appeals before the GST Appellate Authority and High Court.',
    },
    {
        title: 'GST Refund Advisory',
        desc: 'End-to-end assistance with GST refund claims for exporters, inverted duty structure cases, and excess payment situations, including documentation, filing, and follow-up with tax authorities.',
    },
];

export default function GSTPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />
            <section className="py-16 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">GST & Indirect Tax</h2>
                    <p className="section-lead">
                        Complete lifecycle management of your GST obligations.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '2rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Since its introduction in 2017, GST has fundamentally reshaped India&apos;s indirect tax landscape. Compliance requires precision across registration, return filing, credit matching, and documentation. Our GST practice provides businesses with the rigour and expertise needed to stay compliant, recover what is owed, and defend against department scrutiny.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((svc, i) => (
                        <div key={i} className="expertise-card fade-in">
                            <p className="exp-number">{['I', 'II', 'III', 'IV', 'V', 'VI'][i]}</p>
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
