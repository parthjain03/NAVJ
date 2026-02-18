import React from 'react';

export default function Leadership() {
    return (
        <section id="leadership">
            <div className="section-header fade-in">
                <span className="section-eyebrow">The Board</span>
                <h2 className="section-title">Leadership</h2>
                <p className="section-lead">Decades of discipline. A single standard of integrity.</p>
                <div className="gold-rule"></div>
            </div>

            {/* Chairman's Spotlight */}
            <div className="chairman-spotlight fade-in" style={{
                maxWidth: '900px',
                margin: '0 auto 6rem',
                textAlign: 'center'
            }}>
                <div className="spotlight-photo-container" style={{
                    width: '240px',
                    height: '240px',
                    margin: '0 auto 2rem',
                    position: 'relative',
                    borderRadius: '50%',
                    padding: '8px',
                    border: '1px solid var(--navy)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '4px solid var(--gold)',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="/images/adeep-jain.png"
                            alt="CA. Adeep Veer Jain"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <h3 className="spotlight-name" style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '3rem',
                    color: 'var(--navy)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                }}>CA. Adeep Veer Jain</h3>

                <p className="spotlight-role" style={{
                    fontFamily: 'var(--font-lato)',
                    color: 'var(--gold)',
                    fontSize: '1.1rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '2rem'
                }}>Managing Partner</p>

                <div style={{ width: '80px', height: '1px', background: 'var(--navy)', margin: '0 auto 2rem' }}></div>

                <p className="spotlight-bio" style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'var(--slate)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    A Fellow Chartered Accountant with over 26 years of multi-disciplinary experience. Holding qualifications in Law (LLB) and Cost Accountancy (CMA), along with DISA (ICAI) certification, Adeep specializes in high-stakes litigation and statutory banking audits. He currently serves as a Statutory Auditor for Central Bank of India and has deep experience with PSU institutions including SBI and PNB.
                </p>

                <div className="credentials-row" style={{ marginTop: '2rem', justifyContent: 'center' }}>
                    <span className="credential-badge">FCA</span>
                    <span className="credential-badge">CMA</span>
                    <span className="credential-badge">LLB</span>
                    <span className="credential-badge">DISA</span>
                </div>
            </div>

            {/* Team Grid */}
            <div className="board-partners" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '3rem',
                maxWidth: '900px',
                margin: '0 auto',
                borderTop: '1px solid rgba(10, 25, 47, 0.1)',
                paddingTop: '4rem'
            }}>
                <style jsx>{`
                    @media (max-width: 768px) {
                        .board-partners {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>

                {/* Mentor Card */}
                <div className="board-partner-card h-full">
                    <div className="card-photo-placeholder" aria-label="Portrait: Adv. Anil Kumar Jain" style={{
                        width: '80px', height: '80px', margin: '0 0 1.5rem', border: '2px solid var(--gold)'
                    }}>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="13" r="7" stroke="#C5A059" strokeWidth="1.2" />
                            <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h4 className="partner-name">Adv. Anil Kumar Jain</h4>
                    <p className="partner-tag">Mentor &amp; Senior Counsel</p>
                    <p className="partner-bio" style={{ marginTop: '1rem' }}>
                        With over 43 years of practice in Direct Tax Litigation, serving as the firm's guiding principle on complex regulatory matters and distinct legal interpretation.
                    </p>
                </div>

                <div className="board-partner-card h-full">
                    <p className="partner-number">— 01</p>
                    <h4 className="partner-name">CA. Shweta Goyal</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Specializing in Fund Management, Credit Risk Assessment, and Strategic Cost Optimization.</p>
                </div>

                <div className="board-partner-card h-full">
                    <p className="partner-number">— 02</p>
                    <h4 className="partner-name">CA. Nida Amjad Kamran</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Leading the Audit &amp; Assurance division with a focus on Appellate Litigation and Bank Audits.</p>
                </div>

                <div className="board-partner-card h-full">
                    <p className="partner-number">— 03</p>
                    <h4 className="partner-name">CA. Anu Jain</h4>
                    <p className="partner-tag">Network Partner</p>
                    <p className="partner-bio">The firm's specialist in International Taxation, Transfer Pricing, and FEMA. She leads the India Entry Strategy desk for foreign subsidiaries.</p>
                </div>

            </div>
        </section>
    );
}
