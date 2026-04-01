"use client";
import React, { useEffect } from 'react';

export default function CareersPage() {
    useEffect(() => {
        document.title = 'Careers | NAVJ & Co.';
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

    const values = [
        { title: 'Client Satisfaction', body: 'Our paramount focus is the complete satisfaction of our clients. We believe a true financial partnership extends beyond basic compliance to deliver actionable results that empower long-term growth.' },
        { title: 'Institutional Integrity', body: 'With a lineage spanning four generations, integrity is our inheritance. We uphold transparency and rigour as the non-negotiable foundations of our professional conduct.' },
        { title: 'Evolutionary Thinking', body: 'We bridge decades of wisdom with modern digital intelligence. By blending traditional financial ethics with advanced technological systems, we confidently navigate the global economy.' },
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="py-32 px-8">
                {/* Header */}
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Join Our Firm</span>
                    <h2 className="section-title">Careers</h2>
                    <p className="section-lead">
                        Four generations of financial stewardship. One firm, always looking for the next generation of exceptional professionals.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                {/* Culture Values */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="section-header fade-in">
                        <h3 className="section-title">Our Culture</h3>
                        <p className="section-lead" style={{ textAlign: 'left' }}>
                            These values are deeply ingrained across our organisation, guiding everyone, from new hires to senior partners, in every client interaction.
                        </p>
                        <div className="gold-rule"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {values.map((val, i) => (
                            <div key={i} className="border-l-2 border-[#C5A059] pl-6 fade-in">
                                <p className="tl-content-title">{val.title}</p>
                                <p className="tl-content-body">{val.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Positions */}
                <div className="max-w-3xl mx-auto fade-in" style={{ textAlign: 'center' }}>
                    <div className="section-header fade-in">
                        <h3 className="section-title">Open Positions</h3>
                        <div className="gold-rule"></div>
                    </div>
                    <p className="tl-content-body" style={{ marginBottom: '2.5rem' }}>
                        We are always on the lookout for talented Chartered Accountants, Advocates, Cost Accountants, and article assistants who share our commitment to excellence and integrity.
                    </p>

                    <div style={{
                        background: 'var(--white)',
                        padding: '2.5rem 2rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(10, 25, 47, 0.06)',
                    }}>
                        <p className="tl-content-sub" style={{ marginBottom: '0.75rem' }}>How to Apply</p>
                        <p className="tl-content-body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            Please send your CV and a brief cover letter to the email address below, mentioning the role you are interested in.
                        </p>
                        <a href="mailto:adeepjain.ca@gmail.com?subject=Career Inquiry — NAVJ %26 Co." className="btn-agree" style={{ textDecoration: 'none' }}>
                            Send Your Application
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
