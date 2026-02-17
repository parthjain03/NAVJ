import React from 'react';

export default function Leadership() {
    return (
        <section id="leadership">
            <div className="section-header fade-in">
                <span className="section-eyebrow">The Board</span>
                <h2 className="section-title">Leadership</h2>
                <p className="section-lead" style={{ color: 'rgba(253,252,240,0.5)' }}>Decades of discipline. A single standard of integrity.</p>
                <div className="gold-rule"></div>
            </div>

            {/* Feature profiles */}
            <div className="board-features">

                {/* Managing Partner */}
                <div className="board-feature-card">
                    <p className="card-role-tag">Managing Partner</p>

                    <div className="card-photo-placeholder" aria-label="Portrait: CA. Adeep Veer Jain">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="13" r="7" stroke="#C5A059" strokeWidth="1.2" />
                            <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <h3 className="card-name">CA. Adeep Veer Jain</h3>
                    <p className="card-designation">Managing Partner</p>
                    <div className="card-rule"></div>
                    <p className="card-bio">
                        A Fellow Chartered Accountant with over 26 years of multi-disciplinary experience. Holding qualifications in Law (LLB) and Cost Accountancy (CMA), along with DISA (ICAI) certification, Adeep specializes in high-stakes litigation and statutory banking audits. He currently serves as a Statutory Auditor for Central Bank of India and has deep experience with PSU institutions including SBI and PNB.
                    </p>
                    <div className="credentials-row">
                        <span className="credential-badge">FCA</span>
                        <span className="credential-badge">CMA</span>
                        <span className="credential-badge">LLB</span>
                        <span className="credential-badge">DISA</span>
                    </div>
                </div>

                {/* Mentor */}
                <div className="board-feature-card">
                    <p className="card-role-tag">Mentor &amp; Senior Counsel</p>
                    <div className="card-photo-placeholder" aria-label="Portrait: Adv. Anil Kumar Jain">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="13" r="7" stroke="#C5A059" strokeWidth="1.2" />
                            <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="card-name">Adv. Anil Kumar Jain</h3>
                    <p className="card-designation">Mentor &amp; Senior Counsel</p>
                    <div className="card-rule"></div>
                    <p className="card-bio">
                        With over 43 years of practice in Direct Tax Litigation, Anil Kumar Jain serves as the firm's guiding principle on complex regulatory matters. His tenure represents the bridge between the firm's historic values and modern legal interpretation — an anchor of trust for clients navigating the most consequential financial decisions of their lives.
                    </p>
                    <div className="credentials-row">
                        <span className="credential-badge">Advocate</span>
                        <span className="credential-badge">43 Yrs. Practice</span>
                    </div>
                </div>

            </div>

            {/* Partners row */}
            <div className="board-partners">

                <div className="board-partner-card">
                    <p className="partner-number">— 01</p>
                    <h4 className="partner-name">CA. Shweta Goyal</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Specializing in Fund Management, Credit Risk Assessment, and Strategic Cost Optimization.</p>
                </div>

                <div className="board-partner-card">
                    <p className="partner-number">— 02</p>
                    <h4 className="partner-name">CA. Nida Amjad Kamran</h4>
                    <p className="partner-tag">Partner</p>
                    <p className="partner-bio">Leading the Audit &amp; Assurance division with a focus on Appellate Litigation and Bank Audits.</p>
                </div>

                <div className="board-partner-card">
                    <p className="partner-number">— 03</p>
                    <h4 className="partner-name">CA. Anu Jain</h4>
                    <p className="partner-tag">Network Partner</p>
                    <p className="partner-bio">The firm's specialist in International Taxation, Transfer Pricing, and FEMA. She leads the India Entry Strategy desk for foreign subsidiaries.</p>
                </div>

            </div>
        </section>
    );
}
