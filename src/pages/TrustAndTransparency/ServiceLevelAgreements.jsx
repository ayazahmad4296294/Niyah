import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import bgImage from '../../assets/images/certifiedcompaniesheaher.png';

const ServiceLevelAgreements = () => {
    return (
        <div className='w-full'>
            <Navbar />

            {/* Header (Hero Section) */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden isolate'>
                <img
                    src={bgImage}
                    alt="SLA Hero"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-primary/70 -z-10'></div>

                {/* Content */}
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white'>
                        Service Level Agreement (SLA)
                    </h1>
                    <p className='text-lg md:text-xl font-normal mb-4 drop-shadow-md text-[#E0E7FF]'>
                        How Niya Pact™ ensures reliability, transparency, and trust in every interaction.
                    </p>
                    <p className='text-base text-[#E0E7FF] max-w-3xl mx-auto'>
                        This Service Level Agreement outlines the standards, commitments, and responsibilities that guide the delivery of all Niya Pact™ services. It ensures that certified organizations, applicants, and partners receive consistent, high-quality support aligned with our core principles of integrity, awareness, and impact.
                    </p>
                </div>
            </div>

            {/* Content Section (Scrolls over header feel) */}
            <div className='relative z-20 bg-white min-h-[450px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-4 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    {/* Section 1 — PURPOSE OF THIS AGREEMENT */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            {/* Content */}
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 uppercase'>
                                    PURPOSE OF THIS AGREEMENT
                                </h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    The purpose of this SLA is to define the service expectations and levels of support that Niya Pact™ provides to its global community. By establishing clear guidelines, we aim to eliminate ambiguity, foster accountability, and maintain the trust that is essential for ethical certification and organizational awareness.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="Purpose"
                                    className='w-full h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2 — OUR SERVICE COMMITMENTS */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            <div className='md:w-1/2 w-full order-2 md:order-1'>
                                <img
                                    src={bgImage}
                                    alt="Commitments"
                                    className='w-full h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                            <div className='md:w-1/2 order-1 md:order-2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 uppercase'>
                                    OUR SERVICE COMMITMENTS
                                </h2>
                                <p className='text-gray-700 mb-6'>
                                    At Niya Pact™, we are dedicated to providing a seamless and professional experience for all stakeholders. Our commitments include:
                                </p>
                                <ul className='list-disc list-outside ml-5 space-y-3 text-gray-700'>
                                    <li>Timely communication throughout every phase of the certification and review process.</li>
                                    <li>Transparent methodology based on the three pillars of Niya Pact™.</li>
                                    <li>Secure handling of all data, following GDPR standards and strict confidentiality protocols.</li>
                                    <li>Fair and unbiased assessments, supported by our hybrid human-plus-technology review model.</li>
                                    <li>Clear documentation of findings, decisions, and certification outcomes.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 — SERVICE AVAILABILITY */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                            <div className='md:w-1/2 flex items-start md:items-center'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary uppercase leading-tight'>
                                    SERVICE AVAILABILITY
                                </h2>
                            </div>
                            <div className='md:w-1/2'>
                                <div className='space-y-4 text-gray-700'>
                                    <p>
                                        Our digital platforms and certification portals are designed for high availability, aiming for 99.9% uptime during standard business operations. We utilize redundant infrastructure and secure cloud hosting to ensure that our tools are available when you need them.
                                    </p>
                                    <p>
                                        Standard support hours are Monday through Friday, 9:00 AM to 6:00 PM (GMT), excluding major public holidays. Global organizations may receive support from regional offices according to local business hours.
                                    </p>
                                    <p>
                                        Scheduled maintenance that may cause service interruptions is typically performed during off-peak hours and will be communicated at least 48 hours in advance through our admin dashboard and email notifications.
                                    </p>
                                    <p className='mt-6 pt-4 border-t border-gray-100 text-sm italic'>
                                        In the event of an unplanned service interruption, our technical response team is activated immediately to restore access and provide status updates until the issue is resolved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 — RESPONSE & RESOLUTION TIMES */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            {/* content */}
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 uppercase'>
                                    RESPONSE & RESOLUTION TIMES
                                </h2>
                                <p className='text-gray-700 mb-6'>
                                    We strive to address all inquiries and process updates within the following timeframes:
                                </p>
                                <ul className='list-disc list-outside ml-5 space-y-3 text-gray-700'>
                                    <li><strong>General inquiries:</strong> Within 2–3 business days</li>
                                    <li><strong>Application and pre-screening updates:</strong> Within 5 business days</li>
                                    <li><strong>Assessment or certification-related questions:</strong> Within 7 business days</li>
                                    <li><strong>Technical support issues:</strong> As soon as possible, depending on severity</li>
                                </ul>
                                <p className='mt-8 text-sm text-gray-600 font-medium'>
                                    * Urgent matters related to data security or active certification disputes are prioritized for immediate review.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="Response Times"
                                    className='w-full h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 5 — RESPONSIBILITIES OF THE ORGANIZATION */}
                    <section className='py-16 px-4 md:px-18 text-center flex flex-col items-center max-w-4xl mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-bold text-primary mb-8 uppercase'>
                            RESPONSIBILITIES OF THE ORGANIZATION
                        </h2>
                        <div className='text-left w-full'>
                            <p className='text-gray-700 mb-6 text-center'>
                                To ensure the effective delivery of Niya Pact™ services, participating organizations agree to:
                            </p>
                            <ul className='list-disc list-outside ml-5 space-y-3 text-gray-700 mb-6'>
                                <li>Provide accurate and complete information during the certification and review process.</li>
                                <li>Designate a primary contact responsible for coordinating and communicating with the Niya Pact™ team.</li>
                                <li>Respond to information requests or clarification questions within a reasonable timeframe (typically 5 business days).</li>
                                <li>Maintain internal adherence to the principles and standards outlined in the Niya Pact™ framework.</li>
                                <li>Notify Niya Pact™ of any significant organizational changes that may impact certification status.</li>
                            </ul>
                            <p className='text-gray-700 font-medium'>
                                Collaborative engagement is crucial for the integrity of the Niya Pact™ ecosystem and the success of each organization's certification journey.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 — DATA SECURITY & CONFIDENTIALITY */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                            <div className='md:w-[60%]'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 uppercase'>
                                    DATA SECURITY & CONFIDENTIALITY
                                </h2>
                                <p className='text-gray-700 mb-6 leading-relaxed'>
                                    Niya Pact™ employs industry-leading security measures to protect the sensitive information provided by organizations. We understand the importance of confidentiality in the context of ethical reviews and internal assessments.
                                </p>
                                <div className='mb-10'>
                                    <hr className='border-gray-200 mb-8 w-full' />
                                    <ul className='list-disc list-outside ml-5 space-y-4 text-gray-700'>
                                        <li>Encryption of all data at rest and in transit.</li>
                                        <li>Strict access controls restricted to authorized personnel.</li>
                                        <li>Regular third-party security audits and vulnerability scans.</li>
                                        <li>Full compliance with global data protection regulations (GDPR, CCPA).</li>
                                    </ul>
                                </div>
                                <p className='text-gray-800 font-medium italic'>
                                    Your data is used solely for the purpose of evaluation and service delivery as outlined in our Privacy Policy.
                                </p>
                            </div>
                            <div className='md:w-[40%] w-full flex items-center'>
                                <img
                                    src={bgImage}
                                    alt="Security"
                                    className='w-full h-auto rounded-xl shadow-lg object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 7 — TERMINATION OF SERVICES */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="Termination"
                                    className='w-full h-[450px] rounded-xl shadow-lg object-cover'
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-6 uppercase'>
                                    TERMINATION OF SERVICES
                                </h2>
                                <p className='text-gray-700 mb-6'>
                                    While we aim for long-term partnerships, services may be terminated or certifications suspended under the following conditions:
                                </p>
                                <ul className='list-disc list-outside ml-5 space-y-3 text-gray-700 mb-6'>
                                    <li>Breach of the Niya Pact™ ethical standards or code of conduct.</li>
                                    <li>Failure to provide accurate information or maintain required operational transparency.</li>
                                    <li>Organizational request for withdrawal from the certification program.</li>
                                </ul>
                                <p className='text-gray-700'>
                                    In cases of suspension or revocation, the organization will receive detailed feedback and a clear pathway for reinstatement if applicable.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 — Centered Final Section */}
                    <section className='py-16 px-4 md:px-18 text-center flex flex-col items-center max-w-4xl mx-auto border-t border-gray-50'>
                        <h2 className='text-xl md:text-2xl font-semibold text-primary/80 mb-6'>
                            CHANGES TO THIS AGREEMENT
                        </h2>
                        <p className='text-gray-600 mb-10'>
                            Niya Pact™ reserves the right to update this SLA to reflect improvements in our service delivery or changes in industry standards. Any material changes will be communicated to all active organizations via email and through our platform notifications.
                        </p>

                        <h2 className='text-xl md:text-2xl font-semibold text-primary/80 mb-4'>
                            CONTACT
                        </h2>
                        <p className='text-primary font-bold text-lg mb-8'>
                            support@niyapact.com
                        </p>

                        <p className='text-gray-700 font-medium max-w-2xl'>
                            We are committed to your success and to the values that define the Niya Pact™ community. If you have any questions regarding these standards, please do not hesitate to reach out to our team.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceLevelAgreements;