"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function TaxationPage() {
    useEffect(() => {
        document.title = 'Taxation & GST | NAVJ & Co.';
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
            title: 'Income Tax Advisory & Litigation',
            desc: 'Strategic tax planning, return preparation, and robust representation before appellate authorities including CIT(A) and ITAT.',
        },
        {
            title: 'GST Compliance & Litigation',
            desc: 'End-to-end management of GST life-cycles from registration and return filing to input tax credit optimization and departmental responses.',
        },
        {
            title: 'Corporate Taxation & Advisory',
            desc: 'Comprehensive advisory services tailored for corporate entities to minimize tax liabilities and ensure strict adherence to direct tax laws.',
        },
        {
            title: 'TDS Consultancy',
            desc: 'Expert guidance on Tax Deducted at Source compliance, reconciliation, and timely return filing to prevent regulatory penalties.',
        },
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="py-32 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">Taxation & GST</h2>
                    <p className="section-lead">
                        Comprehensive compliance management for direct and indirect taxes.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '4rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        Our taxation practice spans the full lifecycle of direct and indirect tax compliance. From Income Tax return preparation and appellate representation to end-to-end GST management, we provide proactive, accurate, and strategic tax advisory.
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

                <div className="flex justify-center fade-in">
                    <Link href="/services" className="btn-series">
                        ← Back to All Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
