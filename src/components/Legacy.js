import React from 'react';

export default function Legacy() {
    return (
        <section id="legacy">
            <div className="section-header fade-in">
                <span className="section-eyebrow">Our Story</span>
                <h2 className="section-title">The Legacy</h2>
                <div className="gold-rule"></div>
            </div>

            <div className="legacy-narrative fade-in">
                <blockquote>
                    The story of NAVJ &amp; Co. is the story of Indian commerce itself. Spanning over nine decades and four generations, our practice is rooted in the historic commercial heart of Darya Ganj, Delhi.
                </blockquote>
            </div>

            <div className="timeline-container">
                <div className="timeline-spine"></div>

                {/* 1932 — odd → right */}
                <div className="timeline-item">
                    <div className="tl-spacer"></div>
                    <div className="tl-center">
                        <div className="tl-dot"></div>
                        <span className="tl-year">1932</span>
                    </div>
                    <div className="tl-content">
                        <p className="tl-content-title">The Genesis</p>
                        <p className="tl-content-sub">Adv. F.L. Jain — Founder</p>
                        <p className="tl-content-body">
                            Founded by Advocate F.L. Jain in pre-independence India, the practice was built on the nascent foundations of tax jurisprudence in Delhi. At a time when the nation's commercial identity was forming, the firm planted its roots in principled financial counsel.
                        </p>
                    </div>
                </div>

                {/* Mid-Century — even → left */}
                <div className="timeline-item">
                    <div className="tl-content">
                        <p className="tl-content-title">The Torchbearer</p>
                        <p className="tl-content-sub">Adv. R.K. Jain — Second Generation</p>
                        <p className="tl-content-body">
                            The legacy was carried forward by Advocate R.K. Jain, who expanded the firm's footprint in income tax litigation during India's post-independence economic formation — building a reputation for rigorous, principled advocacy that endures to this day.
                        </p>
                    </div>
                    <div className="tl-center">
                        <div className="tl-dot"></div>
                        <span className="tl-year">Mid-Century</span>
                    </div>
                    <div className="tl-spacer"></div>
                </div>

                {/* 2000 — odd → right */}
                <div className="timeline-item">
                    <div className="tl-spacer"></div>
                    <div className="tl-center">
                        <div className="tl-dot"></div>
                        <span className="tl-year">2000</span>
                    </div>
                    <div className="tl-content">
                        <p className="tl-content-title">The Modern Era</p>
                        <p className="tl-content-sub">CA. Adeep Veer Jain — Third Generation</p>
                        <p className="tl-content-body">
                            CA. Adeep Veer Jain (FCA, CMA, LLB, DISA) took the helm, transforming a venerable legal practice into a full-service Chartered Accountancy firm — integrating modern audit assurance and international advisory with the traditional legal rigor of his predecessors.
                        </p>
                    </div>
                </div>

                {/* 2026 — even → left */}
                <div className="timeline-item">
                    <div className="tl-content">
                        <p className="tl-content-title">The Future</p>
                        <p className="tl-content-sub">Fourth Generation</p>
                        <p className="tl-content-body">
                            The fourth generation prepares to step in, continuing a 94-year tradition of financial stewardship — integrating new-age financial technology with century-old values, and carrying forward the founding principle that trust is the firmest balance sheet entry of all.
                        </p>
                    </div>
                    <div className="tl-center">
                        <div className="tl-dot"></div>
                        <span className="tl-year">2026</span>
                    </div>
                    <div className="tl-spacer"></div>
                </div>

            </div>
        </section>
    );
}
