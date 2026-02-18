"use client";
import { useState } from 'react';

export default function DisclaimerModal() {
    const [isVisible, setIsVisible] = useState(true);

    const handleAgree = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div id="disclaimer-overlay">
            <div id="disclaimer-modal">
                <p className="modal-eyebrow">Important Notice — Please Read Carefully</p>
                <h2>Disclosure</h2>
                <p>As per the regulations governing Chartered Accountants in India, we are not permitted to solicit work or advertise for our services. By clicking 'I Agree' below, the user acknowledges the following:</p>
                <ol>
                    <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</li>
                    <li>The user wishes to gain more information about us for their own information and use;</li>
                    <li>The information about us is provided to the user only on their specific request.</li>
                </ol>
                <p className="modal-footer-text">The information provided under this website is solely available at your request for informational purposes only and should not be interpreted as soliciting or advertisement.</p>
                <button className="btn-agree" id="agree-btn" onClick={handleAgree}>I Agree</button>
            </div>
        </div>
    );
}
