"use client";
import React, { useEffect } from 'react';
import Media from '@/components/Media';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function KnowledgePage() {
    useEffect(() => {
        document.title = 'Knowledge Centre | NAVJ & Co.';
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

    const articles = [
        {
            category: 'ICAI Updates',
            date: 'March 2026',
            title: 'Understanding the New ICAI 2026 Advertisement Guidelines',
            excerpt: 'A comprehensive breakdown of the historic liberalization of professional communication rules for CA firms, effective April 1, 2026.',
        },
        {
            category: 'International',
            date: 'March 2026',
            title: 'India Entry: A Step-by-Step Guide for Foreign Businesses',
            excerpt: 'From entity structuring and regulatory approvals to tax registration and ongoing compliance — everything foreign companies need to know.',
        },
        {
            category: 'Budget Analysis',
            date: 'February 2026',
            title: 'Union Budget 2026: Key Takeaways for MSMEs',
            excerpt: 'Analysis of the major tax proposals, compliance changes, and incentive schemes announced in the Union Budget 2026-27.',
        },
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            {/* Podcast section (migrated from /media) */}
            <Media />

            {/* Articles / Insights Section */}
            <section className="py-32 px-8" style={{ background: 'var(--white)' }}>
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Insights</span>
                    <h2 className="section-title">Knowledge Centre</h2>
                    <p className="section-lead">
                        Regulatory updates, tax analysis, and professional insights from our partners.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {articles.map((article, i) => (
                        <article key={i} className="fade-in" style={{
                            background: 'var(--cream)',
                            padding: '2.5rem 2rem',
                            borderRadius: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: 0, fontSize: '0.6rem' }}>{article.category}</span>
                                <span style={{
                                    fontFamily: 'var(--font-lato), sans-serif',
                                    fontSize: '0.7rem',
                                    color: 'var(--text-muted)',
                                }}>{article.date}</span>
                            </div>
                            <h3 style={{
                                fontFamily: 'var(--font-playfair), serif',
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                color: 'var(--navy)',
                                marginBottom: '1rem',
                                lineHeight: 1.3,
                            }}>{article.title}</h3>
                            <p className="exp-tagline" style={{ flex: 1, fontSize: '0.9rem' }}>{article.excerpt}</p>
                            <span className="btn-series" style={{ marginTop: '1.5rem', fontSize: '0.75rem', cursor: 'pointer' }}>
                                Read More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <NewsletterCTA />
        </main>
    );
}
