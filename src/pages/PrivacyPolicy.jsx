import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import bgImage from '../assets/images/certifiedcompaniesheaher.png';

const PrivacyPolicy = () => {
    return (
        <div className="w-full min-h-screen">
            <Navbar />

            {/* Header Section (Matching Blog/CertifiedCompanies) */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden shrink-0'>
                <img
                    src={bgImage}
                    alt="Privacy Policy Header Background"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />
                <div className='absolute inset-0 bg-primary/70 -z-10'></div>

                <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
                    Niya Privacy Policy
                </h1>
                <p className='text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md'>
                    Niya Pact™ and Niya One™
                </p>
            </div>

            {/* Content Section (Matching Blog style shadow and layout) */}
            <div className='relative z-20 bg-white min-h-[400px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-6 pt-16 md:px-12 pb-20'>
                <main className="flex justify-center">
                    <div className="max-w-4xl w-full text-primary space-y-12">

                        <section>
                            <p className="text-lg leading-relaxed text-primary/80">
                                This Privacy Policy Outlines how Niya Pact™ and Niya One™ collect, use, and protect your personal data.
                                We are committed to ensuring your privacy is protected and your data is handled in accordance with legal requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Niya is dedicated to transparency and ethical data practices. This policy applies to all users of our platforms,
                                including individuals writing reviews and organizations applying for Niya Pact™ certification.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">2. Who We Are</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Niyah, Inc. is a verification and trust platform designed to bridge the gap between organizations and the communities they serve.
                                Our mission is to foster transparency through verified data and community feedback.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">3. What Data We Collect</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Personal Identification</h3>
                                    <p className="text-lg leading-relaxed text-primary/80">
                                        Name, email address, contact information, and account credentials.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Service-Related Information</h3>
                                    <p className="text-lg leading-relaxed text-primary/80">
                                        Information provided during the Niya Pact™ application process, including organizational documents and impact statements.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Technical Data</h3>
                                    <p className="text-lg leading-relaxed text-primary/80">
                                        IP addresses, browser types, and usage patterns collected through cookies and analytics tools.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Sensitive Data</h3>
                                    <p className="text-lg leading-relaxed text-primary/80">
                                        We do not collect sensitive personal data (e.g., health information, political opinions) unless explicitly required and consented to for specific certification processes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold bold mb-6">4. How Your Data Is Used</h2>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-primary/80">
                                <li>To provide and maintain our services.</li>
                                <li>To process Niya Pact™ certifications.</li>
                                <li>To verify the authenticity of user reviews.</li>
                                <li>To communicate updates and important platform changes.</li>
                                <li>To improve our website and user experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">5. Legal Basis for Processing</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                We process data based on contractual necessity, legal obligations, and our legitimate interest in maintaining a trustworthy platform.
                                Where required, we obtain explicit consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">6. Data Sharing</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                We do not sell your personal data. We may share information with trusted service providers who assist in our operations,
                                under strict confidentiality agreements, or when required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">7. Data Storage & Retention</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Your data is stored securely in encrypted environments. We retain personal information only for as long as necessary
                                to fulfill the purposes outlined in this policy or to comply with legal requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">8. Blockchain Use</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Niya Pact™ uses blockchain technology to create immutable records of certifications. While personal data is not stored
                                directly on public ledgers, unique identifiers associated with specific certifications may be permanent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">9. Cookies & Analytics</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                We use cookies to improve performance and analyze usage trends. You can manage your cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">10. Your Rights Under GDPR</h2>
                            <p className="text-lg leading-relaxed text-primary/80 mb-4">
                                If you are in the European Economic Area, you have rights including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-primary/80">
                                <li>The right to access your data.</li>
                                <li>The right to rectification of inaccurate data.</li>
                                <li>The right to erasure ("right to be forgotten").</li>
                                <li>The right to data portability.</li>
                                <li>The right to object to processing.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">11. Security Measures</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                We implement industry-standard technical and organizational measures to protect your data against unauthorized access, loss, or alteration.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">12. Third-Country Transfers</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Data may be transferred to and processed in countries outside your own. We ensure such transfers are protected by
                                appropriate safeguards like Standard Contractual Clauses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">13. Minors</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">14. Updates to This Policy</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                We may update this policy periodically. Significant changes will be communicated through our website or via email.
                            </p>
                        </section>

                        <section className="pb-10">
                            <h2 className="text-2xl font-bold mb-6">15. Contact</h2>
                            <p className="text-lg leading-relaxed text-primary/80">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br /><br />
                                <strong>Email:</strong> privacy@niyapact.co
                                <br />
                                <strong>Address:</strong> Niyah, Inc., Trust & Privacy Operations
                            </p>
                        </section>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
