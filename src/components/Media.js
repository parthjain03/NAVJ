import React from 'react';

export default function Media() {
    return (
        <section id="media">
            <div className="section-header fade-in">
                <span className="section-eyebrow">Thought Leadership</span>
                <h2 className="section-title">Media &amp; Insights</h2>
                <p className="section-lead">Where regulatory expertise meets public discourse.</p>
                <div className="gold-rule"></div>
            </div>

            {/* Featured Podcast / Video */}
            <div className="media-feature fade-in">
                <div className="media-video-col">
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/5CJ3Wka6ENo"
                            title="Industry Dialogues — FIEA Podcast featuring CA. Adeep Veer Jain"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <p className="video-caption">Discussing MSME Growth Opportunities &amp; Government Schemes on FIEA.</p>
                </div>

                <div className="media-text-col">
                    <span className="media-tag">Podcast Series</span>
                    <h3 className="media-headline">Industry<br />Dialogues</h3>
                    <p className="media-desc">
                        Hosted by CA. Adeep Veer Jain, these sessions bridge the gap between regulatory policy and business growth. They bring clarity to the MSME sector, foreign investment norms, and the evolving compliance landscape in India.
                    </p>
                    <a
                        href="https://www.youtube.com/@thefieaofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-series"
                        aria-label="View Full Series on YouTube"
                    >
                        View Full Series on YouTube
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Gallery Filmstrip */}
            <div className="gallery-header fade-in">
                <h4 className="gallery-title">Life at NAVJ</h4>
                <div className="gallery-rule"></div>
            </div>

            <div className="gallery-strip fade-in">
                <div className="gallery-item">
                    <span className="gallery-item-label">Seminar at FIEA</span>
                </div>

                <div className="gallery-item">
                    <span className="gallery-item-label">Annual General Meeting</span>
                </div>

                <div className="gallery-item">
                    <span className="gallery-item-label">Community Leadership</span>
                </div>

                <div className="gallery-item">
                    <span className="gallery-item-label">Industry Dialogue</span>
                </div>

                <div className="gallery-item">
                    <span className="gallery-item-label">Darya Ganj Office</span>
                </div>
            </div>
        </section>
    );
}
