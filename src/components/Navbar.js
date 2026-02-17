"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
                <Link href="#home" className="nav-brand">NAVJ &amp; Co.</Link>
                <ul className="nav-links">
                    <li><Link href="#legacy">The Legacy</Link></li>
                    <li><Link href="#expertise">Expertise</Link></li>
                    <li><Link href="#media">Media</Link></li>
                    <li><Link href="#leadership">Leadership</Link></li>
                    <li><Link href="#connect">Connect</Link></li>
                </ul>
                <div className="hamburger" id="hamburger" aria-label="Open menu" onClick={toggleMobileMenu}>
                    <span></span><span></span><span></span>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobile-menu">
                <button className="close-menu" id="close-menu" aria-label="Close menu" onClick={closeMobileMenu}>&times;</button>
                <Link href="#legacy" onClick={closeMobileMenu}>The Legacy</Link>
                <Link href="#expertise" onClick={closeMobileMenu}>Expertise</Link>
                <Link href="#media" onClick={closeMobileMenu}>Media</Link>
                <Link href="#leadership" onClick={closeMobileMenu}>Leadership</Link>
                <Link href="#connect" onClick={closeMobileMenu}>Connect</Link>
            </div>
        </>
    );
}
