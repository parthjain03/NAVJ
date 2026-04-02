"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function AuditPage() {
    useEffect(() => {
        document.title = 'Audit & Assurance | NAVJ & Co.';
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

    const services = [
        {
            title: 'Statutory Audit',
            desc: 'Comprehensive audits of financial statements in accordance with the Companies Act, 2013, and applicable Indian Accounting Standards (Ind AS). We ensure your financial reporting meets the highest standards of accuracy and regulatory compliance.',
        },
        {
            title: 'Internal Audit',
            desc: 'Systematic evaluation of internal controls, risk management, and governance processes. Our internal audits help organisations strengthen operational efficiency and safeguard assets.',
        },
        {
            title: 'Tax Audit',
            desc: 'Mandatory audits under Section 44AB of the Income Tax Act for eligible businesses and professionals. We ensure complete compliance with reporting requirements and accurate tax computations.',
        },
        {
            title: 'Bank Audit',
            desc: 'Specialised statutory and concurrent audits for Public Sector and nationalised banking institutions. Our team brings deep domain expertise in RBI regulations, NPA classification, and prudential norms.',
        },
        {
            title: 'Concurrent Audit',
            desc: 'Continuous, real-time examination of financial transactions to ensure early detection of irregularities, ensuring strict compliance with internal policies and regulatory guidelines.',
        },
        {
            title: 'Inventory Audit',
            desc: 'Thorough physical verification and valuation of inventory to identify discrepancies, minimize shrinkage, and ensure accurate representation in financial statements.',
        },
        {
            title: 'System Audit',
            desc: 'In-depth evaluation of IT infrastructure and financial systems. We assess data integrity, system security, and internal controls to mitigate operational risks.',
        },
        {
            title: 'Special Audit',
            desc: 'Customized audit procedures directed by management or regulators to investigate specific financial discrepancies, fraud allegations, or compliance issues.',
        },
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="py-32 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">Audit & Assurance</h2>
                    <p className="section-lead">
                        Financial clarity through rigorous, independent verification.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '4rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Our Audit & Assurance practice delivers independent, rigorous verification of financial statements and internal processes. With deep experience across statutory, internal, tax, and banking audits, we help organisations maintain the highest standards of financial integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((svc, i) => (
                        <div key={i} className="expertise-card fade-in">
                            <p className="exp-number">{['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][i]}</p>
                            <h3 className="exp-title">{svc.title}</h3>
                            <div className="exp-rule"></div>
                            <p className="exp-tagline">{svc.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center fade-in" style={{ marginTop: '4rem' }}>
                    <Link href="/services" className="btn-series">
                        ← Back to All Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
