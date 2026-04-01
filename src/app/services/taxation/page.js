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

                {/* Two-column: Direct Tax | Indirect Tax */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto" style={{ marginBottom: '4rem' }}>
                    <div className="fade-in">
                        <div className="expertise-card" style={{ height: '100%' }}>
                            <p className="exp-number">I</p>
                            <h3 className="exp-title">Direct Tax</h3>
                            <div className="exp-rule"></div>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Income Tax Return preparation and filing',
                                    'Tax planning and advisory for individuals and corporates',
                                    'Income Tax representation before CIT(A) and ITAT',
                                    'Assessment and reassessment proceedings',
                                    'TDS/TCS compliance and reconciliation',
                                    'Advance tax computation and planning',
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-[#C5A059]">✦</span>
                                        <span className="exp-tagline" style={{ marginBottom: 0 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="fade-in">
                        <div className="expertise-card" style={{ height: '100%' }}>
                            <p className="exp-number">II</p>
                            <h3 className="exp-title">Indirect Tax (GST)</h3>
                            <div className="exp-rule"></div>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'GST registration and migration',
                                    'Monthly, quarterly, and annual GST return filing',
                                    'Input Tax Credit reconciliation and optimisation',
                                    'GST notice handling and departmental response',
                                    'E-way bill compliance and management',
                                    'GST audit and annual return (GSTR-9/9C)',
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-[#C5A059]">✦</span>
                                        <span className="exp-tagline" style={{ marginBottom: 0 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
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
