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

            <div className="expertise-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                {/* Note: The CSS file handles grid-template-columns. 
                User requested "Force a 2x2 Grid layout on large screens".
                The global CSS has: grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                To STRICTLY force 2x2 on desktop, we should modify the CSS or inline style.
                Let's use an inline media query or just rely on CSS if it's correct. 
                Actually, let's inject a style tag for this component to force it on md screens.
            */}
                <style jsx>{`
                @media (min-width: 900px) {
                    .expertise-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>

                <div className="expertise-card">
                    <p className="exp-number">01</p>
                    <h3 className="exp-title">Taxation &amp;<br />GST Regulatory</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline" style={{ fontStyle: 'normal', color: 'var(--slate)' }}>
                        Comprehensive compliance management for direct and indirect taxes. We handle Income Tax representation, Appeals, and end-to-end GST lifecycles—from registration to complex notice handling and advisory.
                    </p>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">02</p>
                    <h3 className="exp-title">Audit &amp;<br />Assurance</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline" style={{ fontStyle: 'normal', color: 'var(--slate)' }}>
                        Delivering financial clarity through Statutory, Internal, and Tax Audits. Our approach ensures rigorous compliance with Indian Accounting Standards (Ind AS) and regulatory frameworks.
                    </p>
                </div>

                <div className="expertise-card">
                    <p className="exp-number">03</p>
                    <h3 className="exp-title">System Development<br />&amp; EDI</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline" style={{ fontStyle: 'normal', color: 'var(--slate)' }}>
                        Beyond accounting, we design financial infrastructures. Specializing in System Development, Process Improvement, and Electronic Data Interchange (EDI) mapping (850/810) for global supply chains.
                    </p>
                </div>

                <div className="expertise-card usp">
                    <p className="usp-badge">Global Reach</p>
                    <p className="exp-number">04</p>
                    <h3 className="exp-title">Global Business<br />Advisory</h3>
                    <div className="exp-rule"></div>
                    <p className="exp-tagline" style={{ fontStyle: 'normal', color: 'var(--slate)' }}>
                        Strategic guidance for India Entry (FDI), Startup India registration, and cross-border structuring. We empower businesses to navigate the legal landscape from incorporation to expansion.
                    </p>
                </div>

            </div>
        </section>
    );
}
