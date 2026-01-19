import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const NewCompanyForm = () => {
    const [selectedWhy, setSelectedWhy] = useState([]);
    const [selectedListening, setSelectedListening] = useState([]);

    const handleWhyChange = (value) => {
        if (selectedWhy.includes(value)) {
            setSelectedWhy(selectedWhy.filter(item => item !== value));
        } else {
            setSelectedWhy([...selectedWhy, value]);
        }
    };

    const handleListeningChange = (value) => {
        if (selectedListening.includes(value)) {
            setSelectedListening(selectedListening.filter(item => item !== value));
        } else {
            setSelectedListening([...selectedListening, value]);
        }
    };

    const sectionHeaderClass = "text-primary text-3xl font-bold border-b border-primary mb-6 pb-2 inline-block w-full text-left";

    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all";
    
    const helperTextClass = "text-xs text-gray-500 mt-1";

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            <main className="max-w-5xl mx-auto py-20 px-4 md:px-10">
                {/* Page Titles */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-2">Niya Pact™ Certification Application</h1>
                    <p className="text-xl text-primary font-light">Start your Niya Pact certification process</p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-12">

                        {/* SECTION 1: ORGANIZATION DETAILS */}
                        <section>
                            <h2 className={sectionHeaderClass}>ORGANIZATION DETAILS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Company Name *</label>
                                    <input type="text" className={inputClass} placeholder="Enter company name" />
                                </div>
                                <div>
                                    <label className={labelClass}>Company URL *</label>
                                    <input type="text" className={inputClass} placeholder="www.example.com" />
                                </div>
                                <div>
                                    <label className={labelClass}>Country of Headquarters *</label>
                                    <select className={inputClass}>
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Industry / Sector *</label>
                                    <div className="h-32 overflow-y-auto border border-gray-300 rounded-lg p-2 space-y-1">
                                        {['Hardware', 'Finance', 'Technology', 'Health', 'Banking', 'Insurance', 'Retail', 'Energy'].map(industry => (
                                            <label key={industry} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                                                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                                {industry}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Add Custom Industry (optional)</label>
                                    <input type="text" className={inputClass} placeholder="Enter a custom industry if not listed above" />
                                    <p className={helperTextClass}>Enter a custom industry if not listed above</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Number of Employees</label>
                                    <select className={inputClass}>
                                        <option value="1-10">1–10</option>
                                        <option value="11-50">11–50</option>
                                        <option value="51-200">51–200</option>
                                        <option value="201-1000">201–1000</option>
                                        <option value="1001+">1001+</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClass}>Company Logo</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary transition-colors cursor-pointer">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <span className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none">
                                                    Upload a file
                                                </span>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">JPG, PNG, GIF, or WebP up to 10MB</p>
                                        </div>
                                    </div>
                                    <p className={helperTextClass}>Upload your company logo. This will be used as your company's featured image and displayed in the verification seal.</p>
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClass}>Company Address *</label>
                                    <input type="text" className={inputClass} placeholder="Enter your company address manually" />
                                    <p className={helperTextClass}>Start typing and select from address suggestions. A map preview will appear when you select an address.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 2: PRIMARY CONTACT */}
                        <section>
                            <h2 className={sectionHeaderClass}>PRIMARY CONTACT</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Full Name *</label>
                                    <input type="text" className={inputClass} placeholder="Enter full name" />
                                    <p className={helperTextClass}>First and Last Name</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Role / Position *</label>
                                    <input type="text" className={inputClass} placeholder="e.g., CEO, Director, Manager" />
                                </div>
                                <div>
                                    <label className={labelClass}>Email Address *</label>
                                    <input type="email" className={inputClass} placeholder="contact@company.com" />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number</label>
                                    <input type="tel" className={inputClass} placeholder="+1 (555) 123-4567" />
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 3: PURPOSE & INTENTION */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>PURPOSE & INTENTION</h2>
                            <div>
                                <label className={labelClass}>What is the core purpose of your organization? *</label>
                                <textarea rows="5" className={inputClass} placeholder="Describe the core purpose and mission of your organization"></textarea>
                            </div>
                            <div>
                                <label className={labelClass}>Which values guide your decisions internally? *</label>
                                <textarea rows="5" className={inputClass} placeholder="Describe the values that guide your organization's internal decisions"></textarea>
                            </div>
                            <div>
                                <label className={labelClass}>Why are you seeking Niya Pact™ certification? *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                                    {[
                                        'Strengthen reputation',
                                        'Improve culture and awareness',
                                        'Increase stakeholder trust',
                                        'Show ethical leadership',
                                        'Align actions with purpose',
                                        'Other'
                                    ].map(option => (
                                        <label key={option} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input
                                                type="checkbox"
                                                className="rounded text-primary focus:ring-primary"
                                                onChange={() => handleWhyChange(option)}
                                            />
                                            <span className="text-sm text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                                {selectedWhy.length > 0 && (
                                    <div className="mt-4">
                                        <label className={labelClass}>Please specify</label>
                                        <input type="text" className={inputClass} placeholder="Tell us more..." />
                                    </div>
                                )}
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 4: ORGANIZATIONAL AWARENESS */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>ORGANIZATIONAL AWARENESS</h2>
                            <div>
                                <label className={labelClass}>How does your organization listen to employees?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                                    {[
                                        'Surveys',
                                        'One-on-one conversations',
                                        'HR feedback tools',
                                        'External advisors',
                                        'Not yet',
                                        'Other'
                                    ].map(option => (
                                        <label key={option} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input
                                                type="checkbox"
                                                className="rounded text-primary focus:ring-primary"
                                                onChange={() => handleListeningChange(option)}
                                            />
                                            <span className="text-sm text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                                {selectedListening.length > 0 && (
                                    <div className="mt-4">
                                        <label className={labelClass}>Please specify</label>
                                        <input type="text" className={inputClass} placeholder="Describe your listening methods" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className={labelClass}>How would you describe trust inside your organization today?</label>
                                <select className={inputClass}>
                                    <option value="Strong">Strong</option>
                                    <option value="Inconsistent">Inconsistent</option>
                                    <option value="Developing">Developing</option>
                                    <option value="Needs improvement">Needs improvement</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>What are your biggest cultural or ethical challenges?</label>
                                <textarea rows="5" className={inputClass} placeholder="Enter your challenges here..."></textarea>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 5: IMPACT & RESPONSIBILITY */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>IMPACT & RESPONSIBILITY</h2>
                            <div>
                                <label className={labelClass}>Who benefits from your organization’s decisions? *</label>
                                <textarea rows="5" className={inputClass} placeholder="List key beneficiaries"></textarea>
                            </div>
                            <div>
                                <label className={labelClass}>What positive impact are you already creating? *</label>
                                <textarea rows="5" className={inputClass} placeholder="Describe your current positive impact"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClass}>Do you currently have any certifications or ethical labels?</label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="certifications" className="text-primary focus:ring-primary" />
                                            <span>Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="certifications" className="text-primary focus:ring-primary" />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Does your organization publicly report on impact or ethics?</label>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {['Yes', 'Not yet', 'In progress'].map(status => (
                                            <label key={status} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="reporting" className="text-primary focus:ring-primary" />
                                                <span>{status}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 6: DECLARATION */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>DECLARATION</h2>
                            <div className="space-y-4">
                                <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" />
                                    <span className="text-sm">I confirm that all information provided is accurate and submitted in good faith. *</span>
                                </label>
                                <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" />
                                    <span className="text-sm">I would like to schedule a pre-screening call after submission.</span>
                                </label>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* CAPTCHA & SUBMIT */}
                        <div className="flex flex-col items-center space-y-8">
                            
                            <div className="px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="captcha"
                                    className="w-5 h-5 rounded cursor-pointer accent-primary"
                                />
                                <label htmlFor="captcha" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
                                    I am not a robot
                                </label>
                                <div className="ml-auto">
                                    <img
                                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                        alt="reCAPTCHA"
                                        className="w-8 h-8 opacity-50 grayscale"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/95 hover:shadow-xl transform active:scale-[0.98] transition-all text-lg">
                                Submit Application
                            </button>
                        </div>

                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NewCompanyForm;