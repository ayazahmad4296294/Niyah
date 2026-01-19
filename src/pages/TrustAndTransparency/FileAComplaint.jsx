import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { FaStar } from 'react-icons/fa';

const FileAComplaint = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const labelClass = "block text-sm font-medium text-gray-700 mb-1";
    const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all";
    const helperTextClass = "text-xs text-gray-500 mt-1";

    const companies = [
        "Company Alpha",
        "Beta Solutions",
        "Gamma Tech",
        "Delta Services",
        "Epsilon Dynamics"
    ];

    const complaintTypes = [
        "Service issue",
        "False claim",
        "Quality concern",
        "Billing dispute",
        "Delivery issue",
        "Communication problem",
        "Others"
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            <main className="max-w-5xl mx-auto py-20 px-4 md:px-10">
                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-primary mb-2">File a Complaint</h1>
                        <p className="text-lg text-primary/70 font-normal">Submit your feedback about any verified company in our directory.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-8">

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            {/* 1. Full Name */}
                            <div>
                                <label className={labelClass}>Name *</label>
                                <input type="text" className={inputClass} placeholder="your full name" />
                            </div>

                            {/* 2. Select Company */}
                            <div>
                                <label className={labelClass}>Select a Company *</label>
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>Select a company</option>
                                    {companies.map(company => (
                                        <option key={company} value={company}>{company}</option>
                                    ))}
                                </select>
                            </div>


                            {/* 3. Contact Email */}
                            <div>
                                <label className={labelClass}>Contact Email *</label>
                                <input type="email" className={inputClass} placeholder="your@email.com" />
                            </div>

                        {/* 4. Rating */}
                        <div>
                            <label className={labelClass}>Rating (1–5 stars) *</label>
                            <div className="flex gap-2 mt-2">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <button
                                            type="button"
                                            key={ratingValue}
                                            className={`text-2xl transition-colors cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            onClick={() => setRating(ratingValue)}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        >
                                            <FaStar />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        </div>


                        {/* 5. Complaint Type */}
                        <div>
                            <label className={labelClass}>Complaint Type *</label>
                            <select className={inputClass} defaultValue="">
                                <option value="" disabled>Select type</option>
                                {complaintTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* 6. Description */}
                        <div>
                            <label className={labelClass}>Description</label>
                            <textarea
                                rows="5"
                                className={inputClass}
                                placeholder="Describe the issue in detail"
                            ></textarea>
                        </div>

                        {/* 7. File Upload */}
                        <div>
                            <label className={labelClass}>Upload Supporting File</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary transition-colors cursor-pointer">
                                <div className="space-y-1 text-center font-inter">
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
                        </div>

                        {/* 8. CAPTCHA (UI Only) */}
                        <div className="flex flex-col items-center pt-4">
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
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-8">
                            <button type="submit" className="w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/95 hover:shadow-xl transform active:scale-[0.98] transition-all text-lg cursor-pointer">
                                Submit Complaint
                            </button>
                        </div>

                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FileAComplaint;