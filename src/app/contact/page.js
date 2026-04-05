import React from 'react';
import ContactForm from '@/components/ContactForm';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with NAVJ & Co., Chartered Accountants in New Delhi. Office at Darya Ganj, New Delhi 110002. Phone: +91 98100 61916.',
    openGraph: {
        title: 'Contact | NAVJ & Co.',
        description: 'Reach out to NAVJ & Co. Chartered Accountants in New Delhi.',
        url: 'https://navjco.com/contact',
    },
};

export default function ContactPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />
            <section className="py-16 px-8">
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
                        <ContactForm />
                    </div>

                    {/* Office Info */}
                    <div className="fade-in">
                        <div style={{ marginBottom: '3rem' }}>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Office Address</p>
                            <p className="tl-content-body">
                                Office No. 204 &amp; 205,<br />
                                4262/3, Ansari Road,<br />
                                Darya Ganj,<br />
                                New Delhi, 110002
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <p className="tl-content-sub" style={{ marginBottom: '1rem' }}>Phone</p>
                            <p className="tl-content-body">
                                <a href="tel:+919810061916" style={{ color: 'var(--slate)', textDecoration: 'none' }}>+91 98100 61916</a><br />
                                <a href="tel:01143105497" style={{ color: 'var(--slate)', textDecoration: 'none' }}>011-4310 5497</a><br />
                                <a href="tel:01143560046" style={{ color: 'var(--slate)', textDecoration: 'none' }}>011-435-60046</a>
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
                    marginTop: '2.5rem',
                    fontFamily: 'var(--font-lato), sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                }}>
                    This contact form is for informational inquiries only and does not constitute solicitation or advertisement as per ICAI guidelines.
                </p>
            </section>
        </main>
    );
}
