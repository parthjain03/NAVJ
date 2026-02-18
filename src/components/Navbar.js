"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const isHome = pathname === '/';
            // If not home, always dark (scrolled). If home, dark only after scroll.
            if (!isHome || window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Run immediately on mount/path change
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <Link href="/" className="nav-brand">
                NAVJ &amp; Co.
            </Link>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className="nav-links desktop-menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Legacy</Link></li>
                <li><Link href="/services">Expertise</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/leadership">Leadership</Link></li>
                <li><a href="#connect" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</a></li>
            </ul>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}>&times;</button>
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/about" onClick={toggleMenu}>Legacy</Link>
                <Link href="/services" onClick={toggleMenu}>Expertise</Link>
                <Link href="/media" onClick={toggleMenu}>Media &amp; Insights</Link>
                <Link href="/leadership" onClick={toggleMenu}>Leadership</Link>
                <a href="#connect" onClick={() => { toggleMenu(); document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .nav-links.desktop-menu {
                        display: none;
                    }
                    .hamburger {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
}
