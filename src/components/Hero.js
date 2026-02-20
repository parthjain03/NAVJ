import React from 'react';

export default function Hero() {
    return (
        <section id="home">
            <div className="hero-bg"></div>
            <div className="hero-content">
                <div className="hero-rule-top"></div>
                <p className="hero-eyebrow">Chartered Accountants &nbsp;·&nbsp; Heritage Since 1932</p>
                <h1 className="hero-name">NAVJ <span>&amp;</span> Co.</h1>
                <div className="hero-divider">
                    <span className="hero-divider-text">New Delhi, India</span>
                </div>
                <p className="hero-tagline">
                    Four Generations of Financial Stewardship.<br />
                    From Old Delhi to the Global Economy.
                </p>
            </div>
            {/* Scroll indicator removed as per multi-page design */}
        </section>
    );
}
