import React from 'react';

export default function Legacy() {
    return (
        <section id="legacy">
            <div className="section-header fade-in">
                <h2 className="section-title">The Legacy</h2>
                <div className="gold-rule"></div>
            </div>

            <div className="legacy-narrative fade-in">
                <blockquote>
                    The story of NAVJ &amp; Co. is the story of Indian commerce itself. Spanning over nine decades and four generations, our practice is rooted in the historic commercial heart of Old Delhi.
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
                        <p className="tl-content-sub">Adv. F.L. Jain, First Generation</p>
                        <p className="tl-content-body">
                            Originating in pre-independence India, the family's legal practice was established by Advocate F.L. Jain. Following the enactment of the Provisional Collection of Taxes Act on September 28, 1931, he mastered the new legislation. He then began his tax practice in 1932 from the walled city of Delhi. Through this early work, he planted deep roots in principled financial counsel.
                        </p>
                    </div>
                </div>

                {/* Mid-Century — even → left */}
                <div className="timeline-item">
                    <div className="tl-content">
                        <p className="tl-content-title">The Torchbearer</p>
                        <p className="tl-content-sub">Adv. R.K. Jain, Second Generation</p>
                        <p className="tl-content-body">
                            The legacy was carried forward by Advocate R.K. Jain. He significantly expanded the practice of income tax litigation during India's post-independence economic formation. Through decades of service, he built a reputation for rigorous and principled advocacy that endures to this day.
                        </p>
                    </div>
                    <div className="tl-center">
                        <div className="tl-dot"></div>
                        <span className="tl-year">1962</span>
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
                        <p className="tl-content-sub">CA. Adeep Veer Jain, Third Generation</p>
                        <p className="tl-content-body">
                            Formalising the family heritage, CA. Adeep Veer Jain established NAVJ &amp; Co. as a full-service Chartered Accountancy firm. He diversified the practice into comprehensive fields including direct tax, indirect tax, labour law, foreign accounting, and complex litigations. His leadership seamlessly integrated modern global advisory services with the traditional legal rigour of his predecessors.
                        </p>
                    </div>
                </div>

                {/* 2026 — even → left */}
                <div className="timeline-item">
                    <div className="tl-content">
                        <p className="tl-content-title">The Future</p>
                        <p className="tl-content-sub">Fourth Generation</p>
                        <p className="tl-content-body">
                            The fourth generation is currently preparing to step in and continue the lineage. They are actively integrating new-age financial technology with century-old values. This evolution ensures that the firm's founding principles will remain its reliable compass in a rapidly globalised economy.
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
