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
            if (!isHome || window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

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

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'Legacy' },
        { href: '/services', label: 'Expertise' },
        { href: '/media', label: 'Media' },
        { href: '/leadership', label: 'Leadership' },
    ];

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
                {navItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href} className={pathname === item.href ? 'nav-active' : ''}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li><a href="#connect" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</a></li>
            </ul>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}>&times;</button>
                {navItems.map(item => (
                    <Link key={item.href} href={item.href} onClick={toggleMenu}>{item.label}</Link>
                ))}
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
