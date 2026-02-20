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
                <style jsx>{`
                @media (min-width: 900px) {
                    .expertise-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>

                <div className="expertise-card">
                    <p className="exp-number">I</p>
                    <h3 className="exp-title">Taxation &amp; GST Regulatory</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline">
                        Comprehensive compliance management for direct and indirect taxes. We handle Income Tax representation, Appeals, and end-to-end GST lifecycles, from registration to complex notice handling and advisory.
                    </p>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">II</p>
                    <h3 className="exp-title">Audit &amp; Assurance</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline">
                        Delivering financial clarity through Statutory, Internal, and Tax Audits. Our approach ensures rigorous compliance with Indian Accounting Standards (Ind AS) and regulatory frameworks.
                    </p>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">III</p>
                    <h3 className="exp-title">System Development &amp; EDI</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline">
                        Beyond accounting, we design financial infrastructures. Specializing in System Development, Process Improvement, and Electronic Data Interchange (EDI) mapping (850/810) for global supply chains.
                    </p>
                </div>

                <div className="expertise-card usp">
                    <p className="exp-number">IV</p>
                    <h3 className="exp-title">Global Business Advisory</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline">
                        Strategic guidance for India Entry (FDI), Startup India registration, and cross-border structuring. We empower businesses to navigate the legal landscape from incorporation to expansion.
                    </p>
                </div>

            </div>
        </section>
    );
}
