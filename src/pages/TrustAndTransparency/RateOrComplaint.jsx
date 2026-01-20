import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { FaStar } from 'react-icons/fa';

const RateOrComplaint = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialMode = queryParams.get('mode') || 'complaint';
    const companyIdFromQuery = queryParams.get('companyId');

    const [activeTab, setActiveTab] = useState(initialMode);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Sync tab with URL if needed, or just set initial
    useEffect(() => {
        if (initialMode === 'rate' || initialMode === 'complaint') {
            setActiveTab(initialMode);
        }
    }, [initialMode]);

    const labelClass = "block text-sm font-medium text-gray-700 mb-1";
    const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all";
    const helperTextClass = "text-xs text-gray-500 mt-1";

    // Dummy data for companies
    const companies = [
        { id: "1", name: "Company Alpha" },
        { id: "2", name: "Beta Solutions" },
        { id: "3", name: "Gamma Tech" },
        { id: "4", name: "Delta Services" },
        { id: "5", name: "Epsilon Dynamics" }
    ];

    const complaintTypes = [
        "Service issue",
        "False claim",
        "Quality concern",
        "Billing dispute",
        "Delivery issue",
        "Communication problem",
        "Other"
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="grow max-w-3xl mx-auto py-20 px-4 md:px-10 w-full">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8">
                    <button
                        onClick={() => setActiveTab('rate')}
                        className={`flex-1 py-4 text-center font-bold transition-all border-b-2 ${activeTab === 'rate'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Rate Company
                    </button>
                    <button
                        onClick={() => setActiveTab('complaint')}
                        className={`flex-1 py-4 text-center font-bold transition-all border-b-2 ${activeTab === 'complaint'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        File a Complaint
                    </button>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-primary mb-2">
                            {activeTab === 'rate' ? 'Rate Company' : 'File a Complaint'}
                        </h1>
                        <p className="text-gray-500">
                            {activeTab === 'rate'
                                ? 'Share your experience with this organization.'
                                : 'Submit your feedback about any verified company in our directory.'}
                        </p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        {/* 1. Select Company */}
                        <div>
                            <label className={labelClass}>Select Company *</label>
                            <select
                                className={inputClass}
                                defaultValue={companyIdFromQuery || ""}
                            >
                                <option value="" disabled>Select a company</option>
                                {companies.map(company => (
                                    <option key={company.id} value={company.id}>{company.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* 2. Full Name */}
                        <div>
                            <label className={labelClass}>Full Name *</label>
                            <input type="text" className={inputClass} placeholder="Your full name" />
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
                                            className={`text-3xl transition-colors cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
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

                        {/* 5. Complaint Type (Conditional) */}
                        {activeTab === 'complaint' && (
                            <div>
                                <label className={labelClass}>Complaint Type *</label>
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>Select type</option>
                                    {complaintTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* 6. Description / Message */}
                        <div>
                            <label className={labelClass}>Description / Message</label>
                            <textarea
                                rows="5"
                                className={inputClass}
                                placeholder={activeTab === 'rate' ? "Write your review here..." : "Describe the issue in detail..."}
                            ></textarea>
                        </div>

                        {/* 7. File Upload (Optional) */}
                        <div>
                            <label className={labelClass}>Upload Supporting File (Optional)</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary transition-colors cursor-pointer group">
                                <div className="space-y-1 text-center font-inter">
                                    <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none">
                                            Upload a file
                                        </span>
                                        <p className="pl-1 text-gray-500">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-400">JPG, PNG, PDF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        {/* 8. CAPTCHA */}
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
                        <div className="flex justify-center pt-4">
                            <button type="submit" className="w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/95 hover:shadow-xl transform active:scale-[0.98] transition-all text-lg cursor-pointer">
                                {activeTab === 'rate' ? 'Submit Rating' : 'Submit Complaint'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RateOrComplaint;
