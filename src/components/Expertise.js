import React from 'react';

export default function Expertise() {
    return (
        <section id="expertise">
            <div className="section-header fade-in">
                <span className="section-eyebrow">Practice Areas</span>
                <h2 className="section-title">Expertise</h2>
                <p className="section-lead">Four institutional disciplines. One integrated practice.</p>
                <div className="gold-rule"></div>
            </div>

            <div className="expertise-grid">

                <div className="expertise-card">
                    <p className="exp-number">01</p>
                    <h3 className="exp-title">Assurance &amp;<br />Regulatory</h3>
                    <p className="exp-tagline">"Providing the 'True and Fair' view essential for stakeholder trust."</p>
                    <div className="exp-rule"></div>
                    <ul className="exp-items">
                        <li className="exp-item">Statutory Audit &amp; Assurance</li>
                        <li className="exp-item">Direct &amp; Indirect Tax Litigation (Appeals / Tribunals)</li>
                        <li className="exp-item">Bank Audits &amp; Stock Audits</li>
                    </ul>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">02</p>
                    <h3 className="exp-title">International Taxation<br />&amp; FEMA</h3>
                    <p className="exp-tagline">"Structuring cross-border value to navigate the complexities of the global economy."</p>
                    <div className="exp-rule"></div>
                    <ul className="exp-items">
                        <li className="exp-item">Transfer Pricing</li>
                        <li className="exp-item">India Entry Strategy &amp; FDI Structuring</li>
                        <li className="exp-item">Expatriate Taxation &amp; FEMA Compliance</li>
                        <li className="exp-item">Import / Export Structuring &amp; Trade Incentives</li>
                    </ul>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">03</p>
                    <h3 className="exp-title">Corporate Counsel<br />&amp; Secretarial</h3>
                    <p className="exp-tagline">"From incorporation to board governance, ensuring compliance at every lifecycle stage."</p>
                    <div className="exp-rule"></div>
                    <ul className="exp-items">
                        <li className="exp-item">Company Law Matters &amp; Regulatory Filings</li>
                        <li className="exp-item">Mergers &amp; Acquisitions Due Diligence</li>
                        <li className="exp-item">Corporate Governance Advisory</li>
                        <li className="exp-item">Start-up India Registrations</li>
                    </ul>
                </div>

                <div className="expertise-card usp">
                    <p className="usp-badge">Firm Distinction</p>
                    <p className="exp-number">04</p>
                    <h3 className="exp-title">Digital Advisory<br />&amp; EDI Solutions</h3>
                    <p className="exp-tagline">"Bridging the gap between financial compliance and digital supply chains."</p>
                    <div className="exp-rule"></div>
                    <ul className="exp-items">
                        <li className="exp-item">Electronic Data Interchange (EDI) mapping — 850 / 810 / 856</li>
                        <li className="exp-item">AI-driven Information Systems Audit</li>
                        <li className="exp-item">Back Office Efficiency Modelling</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
