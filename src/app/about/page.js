"use client";
import React, { useEffect } from 'react';
import Legacy from '@/components/Legacy';

export default function AboutPage() {
    useEffect(() => {
        document.title = 'The Legacy | NAVJ & Co.';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <Legacy />

            {/* SECTION A: OUR CULTURE */}
            <section id="culture" className="py-32 px-8">
                <div className="section-header fade-in">
                    <h2 className="section-title">Our Culture</h2>
                    <p className="section-lead" style={{ textAlign: 'left' }}>
                        These values are deeply ingrained across our organisation, guiding everyone, from new hires to senior partners, in every client interaction.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto fade-in">
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Client Satisfaction</p>
                        <p className="tl-content-body">
                            Our paramount focus is the complete satisfaction of our clients. We believe a true financial partnership extends beyond basic compliance to deliver actionable results that empower long-term growth.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Institutional Integrity</p>
                        <p className="tl-content-body">
                            With a lineage spanning four generations, integrity is our inheritance. We uphold transparency and rigour as the non-negotiable foundations of our professional conduct.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Evolutionary Thinking</p>
                        <p className="tl-content-body">
                            We bridge decades of wisdom with modern digital intelligence. By blending traditional financial ethics with advanced technological systems, we confidently navigate the global economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Separator */}
            <div className="flex justify-center py-4">
                <div className="gold-rule"></div>
            </div>

            {/* SECTION B: OUR PHILOSOPHY */}
            <section id="philosophy" className="py-32 px-8">
                <div className="section-header fade-in">
                    <h2 className="section-title">Our Philosophy</h2>
                    <div className="gold-rule"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto fade-in">
                    <div>
                        <p className="tl-content-sub">Vision</p>
                        <p className="tl-content-body" style={{ textAlign: 'left' }}>
                            To be a premier Chartered Accountancy firm that pairs a near-century of traditional values with modern expertise, delivering uncompromising excellence in taxation, audit, and comprehensive financial advisory.
                        </p>
                    </div>

                    <div>
                        <p className="tl-content-sub">Mission</p>
                        <ul className="list-none space-y-3">
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body" style={{ textAlign: 'left' }}>Deliver precise, comprehensive taxation and financial strategies tailored to a global economy.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body" style={{ textAlign: 'left' }}>Ensure absolute regulatory compliance through rigorous, proactive counsel.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body" style={{ textAlign: 'left' }}>Uphold our inherited standard of integrity while providing exceptional service in every engagement.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
