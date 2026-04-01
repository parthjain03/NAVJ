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
    title: "NAVJ & Co. | Chartered Accountants",
    description: "Chartered Accountants based in New Delhi, India. Est. 1932. Four Generations of Financial Stewardship.",
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
