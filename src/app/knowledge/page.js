import React from 'react';
import Media from '@/components/Media';
import VideoEmbed from '@/components/VideoEmbed';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Knowledge Centre',
    description: 'Regulatory updates, tax analysis, and professional insights from the partners at NAVJ & Co. Budget analysis, ICAI updates, international tax, and more.',
    openGraph: {
        title: 'Knowledge Centre | NAVJ & Co.',
        description: 'Regulatory updates, budget analysis, and professional insights from NAVJ & Co.',
        url: 'https://navjco.com/knowledge',
    },
};

const webinars = [
    {
        videoId: 'Wdem3ImvSwQ',
        poster: '/images/budget-manthan-2026.jpg',
        tag: 'Budget Analysis',
        date: 'February 2026',
        title: 'Decoding of Budget 2026',
        description: 'CA Adeep Veer Jain, Secretary of FIEA, joined expert speakers to decode the Union Budget 2026, covering direct and indirect tax proposals for businesses and professionals.',
    },
    {
        videoId: 'ilEvm6WMDK4',
        poster: '/images/decoding-income-tax-act-2025.jpg',
        tag: 'Taxation',
        date: 'January 2026',
        title: 'Decoding of the Income Tax Act 2025',
        description: 'A comprehensive session on the proposed Income Tax Act 2025, covering structural changes, key provisions, and implications for taxpayers and practitioners.',
    },
    {
        videoId: 'OH41Ckl7nuw',
        tag: 'Taxation',
        date: '2025',
        title: 'Changes in ITR and Tax Audit Report for AY 2025-26',
        description: 'An in-depth walkthrough of important changes in ITR forms and the Tax Audit Report applicable for Assessment Year 2025-26.',
    },
    {
        videoId: 'tIPMFMyP-Rg',
        tag: 'Audit',
        date: '2025',
        title: 'NPA Detection, AI and Excel in Bank Audit',
        description: 'Expert discussion on leveraging artificial intelligence tools and Excel-based techniques for effective NPA detection during bank audits.',
    },
    {
        videoId: 'OPPQ5DdxVRw',
        poster: '/images/bank-audit-2026.jpg',
        tag: 'Audit',
        date: 'March 2026',
        title: 'Bank Audit: From Traditional Methods to AI-Driven NPA Detection',
        description: 'A session tracing the evolution of bank audit methodologies, from conventional approaches to modern AI-driven techniques for identifying non-performing assets.',
    },
    {
        videoId: 'hy352ak8Cd8',
        tag: 'Labour Law',
        date: '2025',
        title: 'New Labour Codes and Professional Opportunities',
        description: "An in-depth look at India's four consolidated Labour Codes, their implementation timelines, and the professional opportunities they create for Chartered Accountants and legal practitioners.",
    },
];

const articles = [
    {
        category: 'Tax Reform',
        date: 'April 2026',
        title: 'The Income Tax Act 2025: What Enterprise Leaders Must Know',
        excerpt: 'The most significant structural overhaul of the Indian direct tax regime in over sixty years. Key changes include a unified tax year, abolition of the equalisation levy, and updated return deadlines extended to 48 months.',
        link: 'https://www.linkedin.com/posts/navj-co_corporategovernance-taxreform-cfoinsights-activity-7445183678739279873-cN0w',
    },
    {
        category: 'GST Updates',
        date: 'March 2026',
        title: 'GST Changes You Must Act On Before the Financial Year Closes',
        excerpt: 'GSTR-3B auto-population of liability breakups, the March 31 deadline for Composition Scheme and LUT filings, portal consolidation, and new GSTAT guidelines on appeals and provisional refunds.',
        link: 'https://www.linkedin.com/posts/navj-co_gstupdates-taxcompliance-navj-activity-7444632079302320129-0hnr',
    },
    {
        category: 'Labour Law',
        date: 'March 2026',
        title: 'New Labour Codes: How Indian Payroll and CTC Structures Must Change',
        excerpt: 'The four new Labour Codes bring a 50% basic pay rule, faster gratuity for fixed-term workers, flexible 4-day work weeks, gig worker social security coverage, and tax relief on delayed PF and ESI deposits.',
        link: 'https://www.linkedin.com/posts/navj-co_labourlaws-payrollindia-taxupdates-activity-7444586818802556929-NvtF',
    },
];

export default function KnowledgePage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />

            {/* Podcast / Media section */}
            <Media />

            {/* Webinars Section */}
            <section style={{ padding: '5rem 2rem', background: 'var(--cream)' }}>
                <div className="section-header fade-in">
                    <span className="section-eyebrow">On Camera</span>
                    <h2 className="section-title">Webinars &amp; Events</h2>
                    <p className="section-lead">
                        Live sessions, panel discussions, and budget analysis with our partners.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="knowledge-grid" style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2.5rem',
                }}>
                    {webinars.map((w, i) => (
                        <div key={i} className="fade-in" style={{
                            background: 'var(--white)',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <VideoEmbed videoId={w.videoId} poster={w.poster} title={w.title} />
                            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                                    <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: 0, fontSize: '0.6rem' }}>{w.tag}</span>
                                    <span style={{ fontFamily: 'var(--font-lato), sans-serif', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{w.date}</span>
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-playfair), serif',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    marginBottom: '0.875rem',
                                    lineHeight: 1.3,
                                }}>{w.title}</h3>
                                <p style={{
                                    fontFamily: 'var(--font-lato), sans-serif',
                                    fontSize: '0.85rem',
                                    color: 'var(--slate)',
                                    lineHeight: 1.7,
                                    flex: 1,
                                }}>{w.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Articles / Insights Section */}
            <section style={{ padding: '5rem 2rem', background: 'var(--white)' }}>
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Insights</span>
                    <h2 className="section-title">Knowledge Centre</h2>
                    <p className="section-lead">
                        Regulatory updates, tax analysis, and professional insights from our partners.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="knowledge-grid" style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                }}>
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
                                <span style={{ fontFamily: 'var(--font-lato), sans-serif', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{article.date}</span>
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
                            {article.link ? (
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-series"
                                    style={{ marginTop: '1.5rem', fontSize: '0.75rem', textDecoration: 'none' }}
                                >
                                    Read More
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ) : (
                                <span className="btn-series" style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.4, cursor: 'default' }}>
                                    Coming Soon
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
