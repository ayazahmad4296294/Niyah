import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import bgImage from '../assets/images/certifiedcompaniesheaher.png';

const About = () => {
    return (
        <div className='w-full'>
            <Navbar />

            {/* Header (Hero Section) */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden isolate'>
                <img
                    src={bgImage}
                    alt="About Hero"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-primary/75 -z-10'></div>

                {/* Content */}
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-white'>
                        About Niya Pact™
                    </h1>
                    <p className='text-lg md:text-xl font-normal mb-4 drop-shadow-md text-[#E0E7FF]'>
                        Born from a way of being where good intentions come first.
                    </p>
                    <p className='text-base text-[#E0E7FF] max-w-3xl mx-auto mb-10'>
                        Niya Pact™ was created from the essence of Niya, a philosophy where every action begins with pure intention. In a world driven by speed and appearance, Niya reminds us that alignment and sincerity are the true foundations of trust.
                    </p>
                    <div className='flex justify-center'>
                        <button className='px-8 py-4 bg-secondary text-primary font-bold rounded-xl shadow-lg hover:bg-secondary/90 transition-all active:scale-95 whitespace-nowrap'>
                            Discover Our Philosophy
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Section (Scrolls over header feel) */}
            <div className='relative z-20 bg-white min-h-[450px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-4 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    {/* Section 1 — OUR ORIGIN */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-8 uppercase'>
                                    OUR ORIGIN
                                </h2>
                                <p className='text-gray-700 leading-relaxed text-lg'>
                                    Niya Pact™ traces its roots back to the ancient concept of "Niya"—the purity of intent that precedes every action. We observed a growing disconnect in the modern marketplace between organizational pledges and actual impact. Niya Pact™ was founded to bridge this gap, creating a framework where intention is not just a thought, but a verifiable standard of operation.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="Our Origin"
                                    className='w-full h-[450px] rounded-2xl shadow-xl object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2 — OUR PURPOSE */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                            <div className='md:w-1/2 w-full order-2 md:order-1'>
                                <img
                                    src={bgImage}
                                    alt="Our Purpose"
                                    className='w-full h-[450px] rounded-2xl shadow-xl object-cover'
                                />
                            </div>
                            <div className='md:w-1/2 order-1 md:order-2'>
                                <h2 className='text-3xl font-bold text-primary mb-8 uppercase'>
                                    OUR PURPOSE
                                </h2>
                                <p className='text-gray-700 text-lg leading-relaxed mb-8'>
                                    Our purpose is to cultivate a global ecosystem of trust by verifying the alignment between an organization's internal mission and its external impact. We empower organizations to move beyond compliance and towards true organizational awareness, ensuring that every stakeholder interaction is rooted in sincere commitment.
                                </p>
                                <div className='pl-6 border-l-4 border-secondary'>
                                    <p className='text-xl italic text-primary font-medium'>
                                        “Trust is not a marketing promise, it’s a living reflection of intention.”
                                    </p>
                                    <p className='text-gray-500 mt-2 font-normal'>— From the Niya Philosophy</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 — THE THREE PILLARS */}
                    <section className='py-16 md:py-16 px-4 md:px-18 text-center flex flex-col items-center max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary mb-12 uppercase'>
                            THE THREE PILLARS
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12'>
                            <div className='p-8 rounded-2xl bg-gray-100 border border-gray-100 flex flex-col items-center'>
                                <h3 className='text-xl font-bold text-primary mb-2'>Integrity of Purpose</h3>
                                <div className='w-12 h-1 bg-secondary mb-4 rounded-full'></div>
                            </div>
                            <div className='p-8 rounded-2xl bg-gray-100 border border-gray-100 flex flex-col items-center'>
                                <h3 className='text-xl font-bold text-primary mb-2'>Organizational Awareness</h3>
                                <div className='w-12 h-1 bg-secondary mb-4 rounded-full'></div>
                            </div>
                            <div className='p-8 rounded-2xl bg-gray-100 border border-gray-100 flex flex-col items-center'>
                                <h3 className='text-xl font-bold text-primary mb-2'>Actualization of Impact</h3>
                                <div className='w-12 h-1 bg-secondary mb-4 rounded-full'></div>
                            </div>
                        </div>
                        <button className='px-8 py-4 bg-secondary text-primary font-bold rounded-xl shadow-lg hover:bg-secondary/90 transition-all active:scale-95'>
                            Learn More About the Niya Pact Process
                        </button>
                    </section>

                    {/* Section 4 — HOW NIYA PACT WORKS */}
                    <section className='py-12 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                            <div className='md:w-1/2'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-8 uppercase'>
                                    HOW NIYA PACT WORKS
                                </h2>
                                <p className='text-gray-700 leading-relaxed text-lg mb-6'>
                                    Niya Pact™ utilizes a rigorous, multi-stage hybrid model that combines advanced data analytics with deep human insight. Our process involves a thorough verification of operational data, stakeholder feedback, and internal cultural alignment.
                                </p>
                                <p className='text-gray-700 leading-relaxed text-lg'>
                                    This dual-layered approach ensures that certification is not just a checkbox exercise, but a comprehensive validation of an organization's commitment to its stated values and intentions.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <img
                                    src={bgImage}
                                    alt="How It Works"
                                    className='w-full h-[450px] rounded-2xl shadow-xl object-cover'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 5 — THE SEAL OF TRUST */}
                    <section className='py-10 md:py-16 px-4 md:px-18'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
                            <div className='md:w-1/2 flex flex-col justify-center text-center md:text-left'>
                                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-8 uppercase'>
                                    THE SEAL OF TRUST
                                </h2>
                                <p className='text-gray-700 leading-relaxed text-lg mb-8'>
                                    The Niya Pact™ Seal of Trust is the ultimate recognizable symbol of organizational sincerity. Organizations that carry this seal have demonstrated a profound commitment to the Three Pillars and have passed our rigorous verification process.
                                </p>
                                <div className='flex justify-center md:justify-start'>
                                    <button className='px-8 py-4 bg-secondary text-primary font-bold rounded-xl shadow-lg hover:bg-secondary/90 transition-all active:scale-95'>
                                        Verified by Niya Pact™
                                    </button>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex items-center'>
                                <p className='text-gray-700 leading-relaxed text-lg bg-gray-100 p-8 rounded-2xl border-l-4 border-primary'>
                                    The verification process is dynamic and ongoing. Organizations are assessed annually to ensure they maintain the standards required by the community. This continuous cycle of awareness and improvement keeps the seal relevant and powerful in an ever-changing landscape.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 — CALL TO ACTION */}
                    <section className='py-12 md:py-16 px-4 md:px-18 text-center flex flex-col items-center max-w-4xl mx-auto border-t border-gray-100'>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary mb-8 uppercase'>
                            CALL TO ACTION
                        </h2>
                        <div className='mb-10'>
                            <p className='text-2xl font-bold text-primary/80 mb-4'>
                                Ready to lead with integrity?
                            </p>
                            <p className='text-xl text-gray-600 max-w-2xl'>
                                Join the movement of organizations choosing alignment and trust as their true advantage.
                            </p>
                        </div>
                        <button className='px-8 py-4 bg-secondary text-primary font-bold rounded-xl shadow-xl hover:bg-secondary/90 transition-all shadow-secondary/20 active:scale-95 text-lg'>
                            Apply for Niya Pact™ Certification
                        </button>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;