"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PARTNERS_DATA = [
    {
        name: "Adv. Anil Kumar Jain",
        tag: "Mentor & Senior Counsel",
        bio: "Adv. Anil Kumar Jain brings an unparalleled depth of knowledge to the firm with over 48 years of distinguished practice. A qualified Advocate holding a Bachelor of Commerce degree, he serves as the principal mentor and foundational guiding force for NAVJ & Co. He specialises in intricate direct tax matters, expertly navigating complex litigation across various appellate authorities and regulatory bodies. His decades of rigorous advocacy and profound legal interpretation ensure that the firm’s clients receive steadfast counsel during high-stakes disputes. As a pillar of institutional integrity, his seasoned wisdom continues to shape the firm's strategic approach to complex taxation and legal compliance."
    },
    {
        name: "CA Nida Amjad Kamran",
        tag: "Partner",
        bio: "CA Nida Amjad Kamran brings over 13 years of extensive expertise in accountancy and auditing. A qualified Chartered Accountant and respected faculty member, she seamlessly integrates her academic insight with a rigorous corporate practice. She excels in drafting complex legal replies, analysing corporate operational frameworks, and navigating dynamic business environments with precision. Drawing on her significant experience in the banking sector, she represents the firm in numerous statutory audits and critical appellate matters. Her approach combines technical rigour with strategic foresight, consistently delivering innovative, high-value solutions tailored to evolving client requirements and regulatory landscapes."
    },
    {
        name: "CA Shweta Goyal",
        tag: "Partner",
        bio: "CA Shweta Goyal brings over 11 years of rich experience in audit, fund management, and strategic financing. A qualified Chartered Accountant, she successfully executes complex projects in cost optimisation, benchmarking, and business process management. She adeptly manages corporate relationships by taking complete ownership of comprehensive financial services, enabling clients to focus on their core operations. Her analytical expertise encompasses industry outlooks, risk identification, and detailed financial statement analysis across diverse sectors, including FMCG, retail, real estate, and e-commerce, consistently delivering structured, insight-driven outcomes that support informed decision-making and sustainable business growth."
    },
    {
        name: "CA Ravi Agrawal",
        tag: "Partner",
        bio: "CA Ravi Agrawal brings over 16 years of extensive experience across a wide array of professional services and industrial sectors. A Fellow Chartered Accountant holding a Bachelor of Commerce degree and an Information Systems Audit (DISA-ICAI) certification, he guides clients through complex financial transactions. His advisory portfolio spans diverse industries, including information technology, banking, private equity, automotive, pharmaceuticals, and manufacturing. He has cultivated profound expertise across corporate strategy, transfer pricing, audit assurance, direct taxation, and GST compliance. Driven by a steadfast dedication to exceptional service, he consistently fosters enduring, high-value client relationships."
    },
    {
        name: "CA Anu Jain",
        tag: "Network Partner",
        bio: "CA Anu Jain is a Chartered Accountant and Delhi University alumna specialising in international taxation, transfer pricing, and FEMA regulations. She guides transnational organisations through complex India entry strategies, remittance structuring, and cross-border investments. Her collaborative approach to customised transition planning is instrumental in building enduring relationships with domestic companies, non-governmental organisations, and multinational groups. Beyond her core advisory work in mitigating corporate and expatriate tax exposures, she also contributes to the firm’s thought leadership initiatives, serving as the Editor for its in-house publications and driving insights on evolving regulatory frameworks."
    },
    {
        name: "Adv. Pradeep Asopa",
        tag: "Head of the Labour Law Division",
        bio: "Adv. Pradeep Asopa brings over 26 years of specialised legal expertise to his role as the Head of the Labour Law Division. A qualified Advocate holding a Post Graduate degree in Commerce, he serves as the firm's premier consultant overseeing the complete multitude of Indian labour laws. He applies his profound knowledge of these varied legislative acts to guide organisations through rigorous statutory compliance requirements. Operating across India, he expertly represents clients before all labour departments, tribunals, and courts. His comprehensive advocacy ensures that the firm's corporate clientele seamlessly navigates intricate workforce regulations and complex legal disputes nationwide."
    }
];

export default function Leadership() {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section id="leadership">
            <div className="section-header fade-in">
                <span className="section-eyebrow">The Board</span>
                <h2 className="section-title">Leadership</h2>
                <p className="section-lead">Decades of discipline. A single standard of integrity.</p>
                <div className="gold-rule"></div>
            </div>

            {/* Chairman's Spotlight */}
            <div className="chairman-spotlight fade-in">
                <div className="spotlight-photo-container">
                    <div className="spotlight-photo-inner">
                        <img
                            src="/images/adeep-jain.png"
                            alt="CA. Adeep Veer Jain"
                        />
                    </div>
                </div>

                <h3 className="spotlight-name">CA. Adeep Veer Jain</h3>

                <div className="credentials-row" style={{ margin: '1rem 0 1.25rem' }}>
                    <span className="credential-badge">FCA</span>
                    <span className="credential-badge">CMA</span>
                    <span className="credential-badge">LLB</span>
                    <span className="credential-badge">B.Com</span>
                    <span className="credential-badge">DISA</span>
                </div>

                <p className="spotlight-role">Managing Partner</p>
                <div className="spotlight-rule"></div>

                <div className="flex flex-col gap-4 text-left">
                    <p className="spotlight-bio" style={{ marginBottom: 0 }}>
                        A Fellow Chartered Accountant with over 26 years of multidisciplinary experience, CA Adeep Veer Jain leads NAVJ &amp; Co. as Managing Partner. Holding advanced qualifications in Law (LLB), Cost Accountancy (CMA), and Information Systems Audit (DISA-ICAI), along with several specialised certification courses from the Institute of Chartered Accountants of India (ICAI), his expansive practice encompasses corporate entry-level strategy, direct and indirect taxation, labour law, and rigorous audit assurance.
                    </p>
                    <p className="spotlight-bio" style={{ marginBottom: 0 }}>
                        He is a distinguished Statutory Auditor serving a diverse portfolio of industries and public sector institutions. With more than 20 years of specialised banking audit experience, he has conducted critical audits for several of the nation's premier nationalised banks. Expanding beyond traditional financial compliance, he is also a recognised expert in corporate system development and system optimisation. In this capacity, he has been instrumental in refining internal operating procedures for prominent corporations across the e-commerce, pharmaceutical, and retail sectors.
                    </p>
                    <p className="spotlight-bio" style={{ marginBottom: 0 }}>
                        In the realm of complex legal advocacy, he is a formidable presence. He routinely represents clients with high success before critical appellate bodies, including the Commissioner of Income Tax (Appeals), the National Anti-Profiteering Authority, and CESTAT. Bridging his profound financial and legal acumen, he also provides vital assistance to senior legal counsel in high-stakes matters before the High Court and Supreme Court.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div className="board-partners">
                <style jsx>{`
                    @media (max-width: 768px) {
                        .board-partners {
                            grid-template-columns: 1fr !important;
                        }
                    }
                    .expanding-partner-card {
                        transition: all 0.3s ease;
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                    }
                    .expanding-partner-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 24px rgba(10, 25, 47, 0.08);
                    }
                    .partner-card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                    }
                    .partner-bio-wrapper {
                        display: grid;
                        grid-template-rows: 0fr;
                        transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .partner-bio-wrapper.expanded {
                        grid-template-rows: 1fr;
                        margin-top: 1rem;
                    }
                    .partner-bio-inner {
                        overflow: hidden;
                    }
                `}</style>

                {PARTNERS_DATA.map((partner, index) => {
                    const isExpanded = !!expandedCards[index];
                    return (
                        <div 
                            key={index} 
                            className="board-partner-card h-fit self-start expanding-partner-card fade-in"
                            onClick={() => toggleCard(index)}
                        >
                            <div className="partner-card-header">
                                <div>
                                    <h4 className="partner-name">{partner.name}</h4>
                                    <p className="partner-tag">{partner.tag}</p>
                                </div>
                                <ChevronDown 
                                    style={{ 
                                        color: 'var(--gold)', 
                                        transition: 'transform 0.3s ease',
                                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        marginTop: '4px',
                                        flexShrink: 0
                                    }} 
                                    size={20}
                                />
                            </div>
                            <div className={`partner-bio-wrapper ${isExpanded ? 'expanded' : ''}`}>
                                <div className="partner-bio-inner">
                                    <p className="partner-bio">{partner.bio}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
