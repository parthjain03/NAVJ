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
        { href: '/about', label: 'About' },
        { href: '/partners', label: 'Partners' },
        { href: '/services', label: 'Services', hasDropdown: true },
        { href: '/knowledge', label: 'Knowledge' },
        { href: '/careers', label: 'Careers' },
        { href: '/contact', label: 'Contact' },
    ];

    const serviceSubItems = [
        { href: '/services/audit', label: 'Audit & Assurance' },
        { href: '/services/taxation', label: 'Taxation & GST' },
        { href: '/services/advisory', label: 'Advisory & FEMA' },
        { href: '/services/international', label: 'International Services' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
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

            <ul className="nav-links desktop-menu" style={{ alignItems: 'center' }}>
                {navItems.map(item => (
                    <li key={item.href} className={item.hasDropdown ? 'has-dropdown' : ''}>
                        <Link href={item.href} className={isActive(item.href) ? 'nav-active' : ''}>
                            {item.label}
                        </Link>
                        {item.hasDropdown && (
                            <div className="dropdown-menu">
                                {serviceSubItems.map(sub => (
                                    <Link key={sub.href} href={sub.href} className={pathname === sub.href ? 'active' : ''}>
                                        {sub.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}>&times;</button>
                {navItems.map(item => (
                    <React.Fragment key={item.href}>
                        <Link href={item.href} onClick={toggleMenu}>{item.label}</Link>
                        {item.hasDropdown && serviceSubItems.map(sub => (
                            <Link key={sub.href} href={sub.href} onClick={toggleMenu} style={{
                                fontSize: '1.2rem',
                                opacity: 0.6,
                                paddingLeft: '1.5rem',
                            }}>
                                {sub.label}
                            </Link>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <style jsx>{`
                .has-dropdown {
                    position: relative;
                }
                .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(10, 25, 47, 0.98);
                    min-width: 220px;
                    padding: 1rem 0;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                    border-top: 2px solid var(--gold);
                    z-index: 200;
                }
                .has-dropdown:hover .dropdown-menu {
                    display: block;
                }
                .dropdown-menu :global(a) {
                    display: block;
                    padding: 0.6rem 1.5rem;
                    font-family: var(--font-lato), sans-serif;
                    font-size: 0.8rem;
                    letter-spacing: 0.05em;
                    color: rgba(253, 252, 240, 0.7);
                    text-decoration: none;
                    transition: color 0.3s, padding-left 0.3s;
                    white-space: nowrap;
                }
                .dropdown-menu :global(a:hover),
                .dropdown-menu :global(a.active) {
                    color: var(--gold);
                    padding-left: 2rem;
                }
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
