import React from 'react';
import Link from 'next/link';
import FadeInObserver from '@/components/FadeInObserver';

export const metadata = {
    title: 'Labour Law',
    description: 'Comprehensive labour law compliance and advisory in India: PF, ESI, contract labour, new Labour Codes, shops and establishments, and employment dispute resolution.',
    openGraph: {
        title: 'Labour Law | NAVJ & Co.',
        description: 'End-to-end labour law compliance, audits, and dispute resolution advisory from Chartered Accountants and law graduates in New Delhi.',
        url: 'https://navjco.com/services/labour-law',
    },
};

const services = [
    {
        title: 'PF & ESI Compliance',
        desc: 'End-to-end management of Employees Provident Fund (EPF) and Employee State Insurance (ESI) obligations, including registration, monthly contributions, annual returns, and representation before PF and ESI authorities.',
    },
    {
        title: 'Labour Law Audit',
        desc: 'Systematic review of an organisation\'s compliance posture across applicable labour statutes. We identify gaps, assess risk exposure, and provide a structured remediation roadmap to ensure full statutory adherence.',
    },
    {
        title: 'Contract Labour Compliance',
        desc: 'Advisory and compliance management under the Contract Labour (Regulation and Abolition) Act, 1970, including principal employer and contractor obligations, licensing, registers, and returns.',
    },
    {
        title: 'Shops & Establishments Act',
        desc: 'Registration and ongoing compliance under state-specific Shops and Establishments Acts, covering working hours, leave entitlements, overtime, and maintenance of statutory records and registers.',
    },
    {
        title: 'New Labour Codes Advisory',
        desc: 'Strategic advisory on India\'s four consolidated Labour Codes: the Code on Wages, Industrial Relations Code, Social Security Code, and Occupational Safety, Health and Working Conditions Code. We help businesses assess impact and prepare for full implementation.',
    },
    {
        title: 'Payment of Gratuity & Bonus',
        desc: 'Advisory and compliance under the Payment of Gratuity Act, 1972 and the Payment of Bonus Act, 1965, including eligibility assessments, calculation disputes, and representation before the appropriate authorities.',
    },
    {
        title: 'Employment Disputes & Litigation',
        desc: 'Representation and advisory in proceedings before Labour Courts, Industrial Tribunals, and Conciliation Officers. We assist in drafting employment agreements, standing orders, and managing dispute resolution processes.',
    },
    {
        title: 'Minimum Wages & Payroll Compliance',
        desc: 'Ensuring compliance with the Minimum Wages Act and applicable state notifications. We review payroll structures, advise on allowances, and ensure adherence to wage payment timelines under the Payment of Wages Act.',
    },
];

export default function LabourLawPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <FadeInObserver />
            <section className="py-16 px-8">
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Practice Area</span>
                    <h2 className="section-title">Labour Law</h2>
                    <p className="section-lead">
                        Compliance, counsel, and representation across India&apos;s labour statutes.
                    </p>
                    <div className="gold-rule"></div>
                </div>

                <div className="max-w-4xl mx-auto fade-in" style={{ marginBottom: '2rem' }}>
                    <p className="tl-content-body" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        India&apos;s labour law framework is one of the most extensive in the world, spanning dozens of central and state statutes. With the country transitioning to four consolidated Labour Codes, businesses face both legacy compliance obligations and forward-looking restructuring requirements. Our Labour Law practice, rooted in decades of legal and financial advisory, provides comprehensive guidance across this evolving landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((svc, i) => (
                        <div key={i} className="expertise-card fade-in">
                            <p className="exp-number">{['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][i]}</p>
                            <h3 className="exp-title">{svc.title}</h3>
                            <div className="exp-rule"></div>
                            <p className="exp-tagline">{svc.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center fade-in" style={{ marginTop: '2.5rem' }}>
                    <Link href="/services" className="btn-series">
                        Back to All Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
