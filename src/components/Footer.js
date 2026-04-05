import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const yearText = currentYear > 2026 ? currentYear : "2026";

    return (
        <footer id="connect">
            <div className="footer-inner">

                <div>
                    <p className="footer-brand">NAVJ &amp; Co.</p>
                    <p className="footer-tagline">
                        Chartered Accountants<br />
                        Heritage Since 1932 &nbsp;·&nbsp; New Delhi
                    </p>
                </div>

                <div>
                    <p className="footer-col-title">Office</p>
                    <address className="footer-address" style={{ fontStyle: 'normal' }}>
                        Office No. 204 &amp; 205,<br />
                        4262/3, Ansari Road,<br />
                        Darya Ganj,<br />
                        New Delhi, 110002
                    </address>
                </div>

                <div>
                    <p className="footer-col-title">Contact</p>
                    <ul className="footer-contact-list">
                        <li><a href="tel:+919810061916">+91 98100 61916</a></li>
                        <li><a href="tel:01143105497">011-4310 5497</a></li>
                        <li><a href="tel:01143560046">011-435-60046</a></li>
                        <li style={{ paddingTop: '0.4rem' }}>
                            <a href="mailto:adeepjain.ca@gmail.com">adeepjain.ca@gmail.com</a>
                        </li>
                        <li style={{ paddingTop: '1rem' }}>
                            <a href="https://www.linkedin.com/company/navj-co" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <span className="footer-copyright">&copy; 2026 NAVJ &amp; Co. All rights reserved.</span>
                <span className="footer-bottom-icai">&copy; This website does not constitute solicitation or advertisement as per ICAI guidelines.</span>
            </div>
        </footer>
    );
}
