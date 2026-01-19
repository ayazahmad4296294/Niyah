import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineMail, HiOutlineClock, HiOutlineGlobeAlt } from 'react-icons/hi';

const Contact = () => {
    const inputClass = "w-full px-4 py-2.5 mb-2 rounded-xl border border-primary/10 focus:border-primary focus:outline-none transition-colors text-lg bg-gray-50";
    const labelClass = "block text-sm font-semibold text-primary mb-1";

    return (
        <div className="flex flex-col min-h-screen bg-[#FCFBF3]">
            <Navbar />

            <main className="grow flex items-center justify-center pt-32 pb-28 px-6">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    
                    {/* Left Column: Contact Information */}
                    <div className="flex flex-col justify-center space-y-8 order-1">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h2>
                            <p className="text-xl text-primary/70 max-w-md">
                                We're here to help you with any questions about Niya Pact. Reach out and we'll get back to you shortly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white rounded-xl shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <HiOutlineMail size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-primary/50 uppercase tracking-wider">Email Us</p>
                                    <p className="text-lg font-bold text-primary">support@niyapact.co</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white rounded-xl shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <HiOutlineClock size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-primary/50 uppercase tracking-wider">Response Time</p>
                                    <p className="text-lg font-bold text-primary">Response within 2 working days</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white rounded-xl shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <HiOutlineGlobeAlt size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-primary/50 uppercase tracking-wider">Website</p>
                                    <a href="https://niyapact.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-4">
                                        https://niyapact.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-7 md:px-10 py-8 rounded-2xl shadow-2xl border border-gray-100 order-2">
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className={labelClass}>Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Email Address *</label>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Contact No *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your contact number"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Message</label>
                                <textarea
                                    placeholder="How can we help you?"
                                    className={`${inputClass} resize-none`}
                                    rows={3}
                                />
                            </div>

                            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95 mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
