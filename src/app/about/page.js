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
                    <p className="section-lead">
                        These values are deeply ingrained across our organization, guiding everyone—from new hires to senior partners—in every client interaction.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto fade-in">
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Client Satisfaction</p>
                        <p className="tl-content-body">
                            Our prime aim is the satisfaction of our Clients. We believe true financial partnership goes beyond compliance, delivering actionable results that empower long-term growth.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Institutional Integrity</p>
                        <p className="tl-content-body">
                            With a lineage of four generations, integrity is our inheritance. We uphold transparency and rigor as the non-negotiable foundations of our professional conduct.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-6">
                        <p className="tl-content-title">Evolutionary Thinking</p>
                        <p className="tl-content-body">
                            Bridging decades of wisdom with modern digital intelligence. We blend traditional financial ethics with advanced system technology to navigate the global economy.
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
                        <p className="tl-content-body">
                            To be a trusted and respected Chartered Accountancy firm delivering excellence in taxation, audit, and financial advisory services while empowering clients with reliable and innovative financial solutions.
                        </p>
                    </div>

                    <div>
                        <p className="tl-content-sub">Mission</p>
                        <ul className="list-none space-y-3">
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body">To provide accurate and reliable financial and taxation services.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body">To ensure complete compliance with regulatory requirements.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#C5A059]">✦</span>
                                <span className="tl-content-body">To deliver professional services with integrity and excellence.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
