"use client";
import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        const data = new FormData(e.target);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    phone: data.get('phone'),
                    subject: data.get('subject'),
                    message: data.get('message'),
                }),
            });
            if (!res.ok) throw new Error('Send failed');
            setStatus('success');
            e.target.reset();
        } catch {
            setStatus('error');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                        <option>Taxation &amp; GST</option>
                        <option>Audit &amp; Assurance</option>
                        <option>Advisory</option>
                        <option>International Services</option>
                        <option>Careers</option>
                    </select>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <label className="contact-label">Message</label>
                    <textarea name="message" rows="5" required className="contact-input" style={{ resize: 'vertical' }}></textarea>
                </div>

                <button
                    type="submit"
                    className="btn-agree"
                    style={{ width: '100%', textAlign: 'center' }}
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p style={{
                        marginTop: '1.25rem',
                        fontFamily: 'var(--font-lato), sans-serif',
                        fontSize: '0.85rem',
                        color: '#2d6a4f',
                        textAlign: 'center',
                    }}>
                        Your message has been sent. We will be in touch shortly.
                    </p>
                )}
                {status === 'error' && (
                    <p style={{
                        marginTop: '1.25rem',
                        fontFamily: 'var(--font-lato), sans-serif',
                        fontSize: '0.85rem',
                        color: '#c0392b',
                        textAlign: 'center',
                    }}>
                        Something went wrong. Please email us directly at adeepjain.ca@gmail.com
                    </p>
                )}
            </form>

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
        </>
    );
}
