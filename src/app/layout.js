import { Cinzel, Playfair_Display, Lato } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisclaimerModal from '@/components/DisclaimerModal';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-cinzel',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-lato',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://navjco.com'),
    title: {
        default: 'NAVJ & Co. | Chartered Accountants, New Delhi',
        template: '%s | NAVJ & Co.',
    },
    description: 'Four generations of financial stewardship since 1932. Leading CA firm in New Delhi specialising in Taxation, GST, Audit, Advisory, FEMA, and International Services.',
    keywords: ['chartered accountants', 'CA firm New Delhi', 'taxation', 'GST', 'audit', 'FEMA', 'NRI taxation', 'India entry strategy', 'NAVJ'],
    authors: [{ name: 'NAVJ & Co.' }],
    openGraph: {
        siteName: 'NAVJ & Co.',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/images/og-home.png',
                width: 1200,
                height: 630,
                alt: 'NAVJ & Co. Chartered Accountants, New Delhi. Est. 1932.',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@navjco',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${lato.variable}`}>
            <body className={lato.className}>
                <DisclaimerModal />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
