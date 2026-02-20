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
            <div className="chairman-spotlight fade-in">
                <div className="spotlight-photo-container">
                    <div className="spotlight-photo-inner">
                        <img
                            src="/images/adeep-jain.png"
                            alt="CA. Adeep Veer Jain"
                        />
                    </div>
                </div>

                <h3 className="spotlight-name">CA. Adeep Veer Jain</h3>
                <p className="spotlight-role">Managing Partner</p>
                <div className="spotlight-rule"></div>

                <p className="spotlight-bio">
                    A Fellow Chartered Accountant with over 26 years of multi-disciplinary experience. Holding qualifications in Law (LLB) and Cost Accountancy (CMA), along with DISA (ICAI) certification, Adeep specializes in high-stakes litigation and statutory banking audits. He currently serves as a Statutory Auditor for Central Bank of India and has deep experience with PSU institutions including SBI and PNB.
                </p>

                <div className="credentials-row">
                    <span className="credential-badge">FCA</span>
                    <span className="credential-badge">CMA</span>
                    <span className="credential-badge">LLB</span>
                    <span className="credential-badge">DISA</span>
                </div>
            </div>

            {/* Team Grid */}
            <div className="board-partners">
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
                    <h4 className="partner-name">CA. Shweta Goyal</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Specializing in Fund Management, Credit Risk Assessment, and Strategic Cost Optimization.</p>
                </div>

                <div className="board-partner-card h-full">
                    <h4 className="partner-name">CA. Nida Amjad Kamran</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Leading the Audit &amp; Assurance division with a focus on Appellate Litigation and Bank Audits.</p>
                </div>

                <div className="board-partner-card h-full">
                    <h4 className="partner-name">CA. Anu Jain</h4>
                    <p className="partner-tag">Network Partner</p>
                    <p className="partner-bio">The firm's specialist in International Taxation, Transfer Pricing, and FEMA. She leads the India Entry Strategy desk for foreign subsidiaries.</p>
                </div>

            </div>
        </section>
    );
}
