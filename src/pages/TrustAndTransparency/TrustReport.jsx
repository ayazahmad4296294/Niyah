import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import bgImage from '../../assets/images/certifiedcompaniesheaher.png'; // One single placeholder image across the entire page

const TrustReport = () => {
    return (
        <div className='w-full'>
            <Navbar />

            {/* Header (Hero Section) */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden isolate'>
                <img
                    src={bgImage}
                    alt="Trust Report Hero"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-primary/70 -z-10'></div>

                {/* Content */}
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg'>
                        The Niya Pact™ Trust Report
                    </h1>
                    <p className='text-xl md:text-xl font-normal text-primary-light mb-4 drop-shadow-md text-[#E0E7FF]'>
                        Short supporting sentence for the Niya Pact™ Trust Report.
                    </p>
                    <p className='text-base md:text-base text-[#E0E7FF] max-w-3xl mx-auto'>
                        The Niya Pact™ Trust Report is a comprehensive document designed to provide transparency and build trust between organizations and their stakeholders. It outlines our commitment to ethical practices, security, and continuous improvement in all our operations.
                    </p>
                </div>
            </div>

            {/* Content Section (Scrolls over header feel) */}
            <div className='relative z-20 bg-white min-h-[450px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-4 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    {/* Section 1 – WHY THE TRUST REPORT MATTERS */}
                    <section className='min-h-[450px] flex flex-col items-center justify-center text-center py-12 md:py-20'>
                        <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8 uppercase'>
                            WHY THE TRUST REPORT MATTERS
                        </h2>
                        <div className='max-w-4xl space-y-6 text-gray-700'>
                            <p>
                                Trust is the foundation of any successful relationship, especially in the digital age. The Niya Pact™ Trust Report serves as a bridge, providing the necessary information for stakeholders to feel confident in an organization's integrity and reliability.
                            </p>
                            <p>
                                By openly sharing our processes, security measures, and ethical guidelines, we demonstrate our accountability and dedication to maintaining the highest standards. This report is not just a document; it's a testament to our core values.
                            </p>
                            <p className='font-medium text-lg text-primary'>
                                The purpose of this report is to empower our partners and users with knowledge, ensuring that they can make informed decisions based on clear, verifiable facts about how we operate and protect their interests.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 – HOW THE TRUST REPORT IS CREATED */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            <div className='md:w-[65%]'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6'>
                                    HOW THE TRUST REPORT IS CREATED
                                </h2>
                                <p className='text-gray-700 mb-6'>
                                    Creating the Trust Report is a rigorous process involving multiple departments and external auditors. We ensure that every piece of information is accurate, up-to-date, and reflects our current practices and policies.
                                </p>
                                <hr className='border-gray-200 mb-6' />
                                <ul className='list-disc list-inside space-y-4 text-gray-700 mb-6'>
                                    <li>Data collection from various internal systems and performance metrics.</li>
                                    <li>Review and validation by our legal and security compliance teams.</li>
                                    <li>Final verification by independent third-party certification bodies.</li>
                                </ul>
                                <p className='text-gray-700 mb-4'>
                                    Our commitment to transparency means that we don't just report the highlights; we also address challenges and areas where we are working to improve. This balanced approach is essential for true accountability.
                                </p>
                                <p className='text-sm text-gray-500 italic'>
                                    Note: This report is updated annually to reflect the latest advancements in our security infrastructure and changes in global compliance standards.
                                </p>
                            </div>
                            <div className='md:w-[35%] w-full'>
                                <img
                                    src={bgImage}
                                    alt="Creation Process"
                                    className='w-full h-auto rounded-xl shadow-lg object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 3 – WHAT THE REPORT SHOWS */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                            <div className='md:w-1/2 flex items-center'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary uppercase'>
                                    WHAT THE REPORT SHOWS
                                </h2>
                            </div>
                            <div className='md:w-1/2'>
                                <div className='space-y-5 text-gray-700'>
                                    <div className='mb-5'>
                                        <p><span className='font-bold'>Compliance Status:</span> A detailed breakdown of our adherence to international security standards and data protection regulations.</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p><span className='font-bold'>Security Infrastructure:</span> Overview of the technical measures we employ to protect your data and ensure system availability.</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p><span className='font-bold'>Data Privacy Practices:</span> Explanation of how we collect, use, and safeguard personal information in accordance with our privacy policy.</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p><span className='font-bold'>Ethical Conduct:</span> Our guidelines for internal behavior and our commitment to social responsibility in all business dealings.</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p><span className='font-bold'>Audit Results:</span> Summaries of findings from regular internal and external audits conducted throughout the reporting period.</p>
                                    </div>
                                    <p className='mt-8 font-medium'>
                                        Each section is backed by data and documentation, providing a clear and verifiable picture of our operational health and integrity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 – FOR CERTIFIED ORGANIZATIONS */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6'>
                                    FOR CERTIFIED ORGANIZATIONS
                                </h2>
                                <div className='space-y-3 text-gray-700'>
                                    <p className='mb-3'>
                                        Organizations that have achieved the Niya Pact™ Certification can leverage the Trust Report to differentiate themselves in the market. It provides a formal document that can be shared with clients, investors, and partners.
                                    </p>
                                    <p className='mb-3'>
                                        Certified organizations gain access to detailed templates and guidelines on how to integrate Trust Report findings into their own communication strategies, enhancing their credibility and brand value.
                                    </p>
                                    <p className='mb-3'>
                                        Our team provides ongoing support to help certified members maintain their standards and keep their reports current with evolving industry requirements and stakeholder expectations.
                                    </p>
                                </div>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="Certified Organizations"
                                    className='w-full h-auto md:h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 5 – TRANSPARENCY & PROTECTION */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            <div className='md:w-1/2 w-full order-2 md:order-1'>
                                <img
                                    src={bgImage}
                                    alt="Transparency and Protection"
                                    className='w-full h-auto md:h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                            <div className='md:w-1/2 order-1 md:order-2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6'>
                                    TRANSPARENCY & PROTECTION
                                </h2>
                                <div className='space-y-3 text-gray-700'>
                                    <p className='mb-3'>
                                        Transparency is not just about showing what we do well; it's also about being clear about how we protect our users and partners when issues arise. Our protection protocols are robust and frequently tested.
                                    </p>
                                    <p className='mb-3'>
                                        We maintain a proactive stance in identifying potential risks and implementing safeguards before they can impact our community. This forward-thinking approach is central to the Niya Pact™ philosophy.
                                    </p>
                                    <p className='mb-3'>
                                        Detailed information on our incident response plans and user protection policies is included in the full report, ensuring that everyone knows exactly what to expect from us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 – CALL TO ACTION */}
                    <section className='py-12 md:py-16 px-4 md:px-18 text-center flex flex-col items-center mx-auto'>
                        <h2 className='text-2xl md:text-4xl font-bold text-primary mb-8 uppercase'>
                            CALL TO ACTION
                        </h2>
                        <p className='text-xl text-gray-800 font-medium mb-3'>
                            Ready to demonstrate your organization's commitment to trust?
                        </p>
                        <p className='text-gray-600 mb-8 max-w-2xl'>
                            Join the growing community of Niya Pact™ certified organizations and start building stronger, more transparent relationships with your stakeholders today.
                        </p>
                        <button className='w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/95 hover:shadow-xl transform active:scale-[0.98] transition-all text-lg cursor-pointer'>
                            Request Your Trust Report
                        </button>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TrustReport;