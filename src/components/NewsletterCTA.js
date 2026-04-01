import React from 'react';

export default function NewsletterCTA() {
    return (
        <div className="newsletter-cta fade-in">
            <div className="newsletter-inner">
                <div className="newsletter-text">
                    <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '0.75rem', display: 'block' }}>Stay Informed</span>
                    <h3 style={{
                        fontFamily: 'var(--font-playfair), serif',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        marginBottom: '0.5rem',
                    }}>Regulatory Updates & Tax Insights</h3>
                    <p style={{
                        fontFamily: 'var(--font-lato), sans-serif',
                        fontSize: '0.9rem',
                        color: 'var(--slate-light)',
                        lineHeight: 1.6,
                    }}>
                        Receive quarterly updates on tax policy changes, compliance deadlines, and strategic insights directly from our partners.
                    </p>
                </div>
                <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing. We will be in touch.'); }}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        required
                        className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">Subscribe</button>
                </form>
            </div>

            <style jsx>{`
                .newsletter-cta {
                    background: var(--cream-dark);
                    padding: 4rem 2rem;
                    margin-top: 4rem;
                    border-top: 1px solid rgba(197, 160, 89, 0.3);
                    border-bottom: 1px solid rgba(197, 160, 89, 0.3);
                }
                .newsletter-inner {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    gap: 4rem;
                }
                .newsletter-text {
                    flex: 1;
                }
                .newsletter-form {
                    display: flex;
                    gap: 0;
                    flex-shrink: 0;
                }
                .newsletter-input {
                    font-family: var(--font-lato), sans-serif;
                    font-size: 0.85rem;
                    padding: 0.875rem 1.25rem;
                    background: var(--white);
                    border: 1px solid rgba(10, 25, 47, 0.15);
                    color: var(--navy);
                    outline: none;
                    width: 260px;
                    transition: border-color 0.3s;
                }
                .newsletter-input::placeholder {
                    color: var(--text-muted);
                }
                .newsletter-input:focus {
                    border-color: var(--gold);
                }
                .newsletter-btn {
                    font-family: var(--font-lato), sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 0.875rem 2rem;
                    background: var(--gold);
                    color: var(--navy);
                    border: 1px solid var(--gold);
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .newsletter-btn:hover {
                    background: transparent;
                    color: var(--gold);
                }
                @media (max-width: 768px) {
                    .newsletter-inner {
                        flex-direction: column;
                        text-align: center;
                        gap: 2rem;
                    }
                    .newsletter-form {
                        flex-direction: column;
                        width: 100%;
                    }
                    .newsletter-input {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
