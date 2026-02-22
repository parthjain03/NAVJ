"use client";
import React, { useEffect } from 'react';

export default function ContactPage() {
    useEffect(() => {
        document.title = 'Contact | NAVJ & Co.';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="py-32 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Get in Touch</span>
                    <h2 className="section-title">Contact</h2>
                    <p className="section-lead">
                        We welcome your inquiries. Please reach out using the form below or visit our office.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div className="fade-in">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const data = new FormData(e.target);
                            const subject = data.get('subject') || 'General Inquiry';
                            const body = `Name: ${data.get('name')}%0APhone: ${data.get('phone')}%0A%0A${data.get('message')}`;
                            window.location.href = `mailto:adeepjain.ca@gmail.com?subject=${subject}&body=${body}`;
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className="contact-label">Full Name</label>
                                <input type="text" name="name" required className="contact-input" />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className="contact-label">Email Address</label>
                                <input type="email" name="email" required className="contact-input" />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className="contact-label">Phone Number</label>
                                <input type="tel" name="phone" className="contact-input" />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className="contact-label">Subject</label>
                                <select name="subject" className="contact-input">
                                    <option>General Inquiry</option>
                                    <option>Taxation & GST</option>
                                    <option>Audit & Assurance</option>
                                    <option>Advisory & FEMA</option>
                                    <option>International Services</option>
                                    <option>Careers</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label className="contact-label">Message</label>
                                <textarea name="message" rows="5" required className="contact-input" style={{ resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn-agree" style={{ width: '100%', textAlign: 'center' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Office Info */}
                    <div className="fade-in">
                        <div style={{ marginBottom: '3rem' }}>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Office Address</p>
                            <p className="tl-content-body">
                                Office No. 204 & 205,<br />
                                4262/3, Ansari Road,<br />
                                Darya Ganj,<br />
                                New Delhi, 110002
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Phone</p>
                            <p className="tl-content-body">
                                <a href="tel:+919810061916" style={{ color: 'var(--slate)', textDecoration: 'none' }}>+91 98100 61916</a><br />
                                <a href="tel:01143105497" style={{ color: 'var(--slate)', textDecoration: 'none' }}>011-4310 5497</a>
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Email</p>
                            <p className="tl-content-body">
                                <a href="mailto:adeepjain.ca@gmail.com" style={{ color: 'var(--slate)', textDecoration: 'none' }}>adeepjain.ca@gmail.com</a>
                            </p>
                        </div>

                        <div>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Office Hours</p>
                            <p className="tl-content-body">
                                Monday – Saturday: 10:00 AM – 6:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>

                <p className="fade-in" style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    fontFamily: 'var(--font-lato), sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                }}>
                    This contact form is for informational inquiries only and does not constitute solicitation or advertisement as per ICAI guidelines.
                </p>
            </section>

            <style jsx>{`
                .contact-label {
                    display: block;
                    font-family: var(--font-lato), sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: var(--navy);
                    margin-bottom: 0.5rem;
                }
                .contact-input {
                    width: 100%;
                    font-family: var(--font-lato), sans-serif;
                    font-size: 0.9rem;
                    padding: 0.875rem 1rem;
                    border: 1px solid rgba(10, 25, 47, 0.15);
                    background: var(--white);
                    color: var(--navy);
                    outline: none;
                    transition: border-color 0.3s;
                    border-radius: 2px;
                }
                .contact-input:focus {
                    border-color: var(--gold);
                }
            `}</style>
        </main>
    );
}
