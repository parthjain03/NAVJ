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
                        New Delhi — 110002
                    </address>
                </div>

                <div>
                    <p className="footer-col-title">Contact</p>
                    <ul className="footer-contact-list">
                        <li><a href="tel:+919810061916">+91 98100 61916</a></li>
                        <li><a href="tel:01143105497">011 – 4310 5497</a></li>
                        <li style={{ paddingTop: '0.4rem' }}>
                            <a href="mailto:adeepjain.ca@gmail.com">adeepjain.ca@gmail.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <span style={{ color: '#cbd5e1' }}>&copy; 2026 NAVJ &amp; Co. All rights reserved.</span>
                <span className="footer-bottom-icai" style={{ color: '#cbd5e1' }}>This website does not constitute solicitation or advertisement as per ICAI guidelines.</span>
            </div>
        </footer>
    );
}
