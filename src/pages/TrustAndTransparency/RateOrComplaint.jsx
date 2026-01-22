import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { FaStar } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useCompany } from '../../context/CompanyContext';

const RateOrComplaint = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const queryParams = new URLSearchParams(location.search);
    const initialMode = queryParams.get('mode') || 'complaint';
    const companyIdFromQuery = queryParams.get('companyId');
    const { companies } = useCompany();

    const [activeTab, setActiveTab] = useState(initialMode);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Form State
    const [formData, setFormData] = useState({
        companyId: companyIdFromQuery || "",
        fullName: "",
        email: "",
        complaintType: "",
        message: ""
    });
    const [status, setStatus] = useState({ loading: false, type: null, message: null });

    // Sync validation with user data if logged in
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                fullName: user.name || "",
                email: user.email || ""
            }));
        }
    }, [user]);

    // Sync tab with URL if needed, or just set initial
    useEffect(() => {
        if (initialMode === 'rate' || initialMode === 'complaint') {
            setActiveTab(initialMode);
        }
    }, [initialMode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setRating(0);
        setFormData({
            companyId: "",
            fullName: user?.name || "",
            email: user?.email || "",
            complaintType: "",
            message: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, type: null, message: null });

        if (!user) {
            if (window.confirm("You must be logged in to submit. Go to login page?")) {
                navigate('/login');
            }
            setStatus({ loading: false, type: null, message: null });
            return;
        }

        const endpoint = activeTab === 'rate' ? '/api/ratings' : '/api/complaints';
        const payload = {
            companyId: formData.companyId,
            fullName: formData.fullName,
            email: formData.email,
            rating: rating,
            message: formData.message
        };

        if (activeTab === 'complaint') {
            payload.complaintType = formData.complaintType;
        }

        try {
            const token = localStorage.getItem('token'); // Assuming token is here based on other files
            console.log("Submitting to", endpoint, payload);

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Submission failed');
            }

            setStatus({ loading: false, type: 'success', message: data.message || 'Submitted successfully!' });
            resetForm();
            // Clear success message after 3 seconds
            setTimeout(() => setStatus(prev => ({ ...prev, type: null, message: null })), 5000);

        } catch (error) {
            console.error(error);
            setStatus({ loading: false, type: 'error', message: error.message || 'An error occurred.' });
        }
    };

    const labelClass = "block text-sm font-medium text-gray-700 mb-1";
    const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all";
    const helperTextClass = "text-xs text-gray-500 mt-1";


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

                    {status.message && (
                        <div className={`mb-6 p-4 rounded-lg text-center ${status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* 1. Select Company */}
                        <div>
                            <label className={labelClass}>Select Company *</label>
                            <select
                                name="companyId"
                                className={inputClass}
                                value={formData.companyId}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a company</option>
                                {companies.map(company => (
                                    <option key={company._id} value={company._id}>{company.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* 2. Full Name */}
                        <div>
                            <label className={labelClass}>Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                className={inputClass}
                                placeholder="Your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 3. Contact Email */}
                        <div>
                            <label className={labelClass}>Contact Email *</label>
                            <input
                                type="email"
                                name="email"
                                className={inputClass}
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
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
                            {rating === 0 && <p className="text-xs text-red-500 mt-1">Please select a rating.</p>}
                        </div>

                        {/* 5. Complaint Type (Conditional) */}
                        {activeTab === 'complaint' && (
                            <div>
                                <label className={labelClass}>Complaint Type *</label>
                                <select
                                    name="complaintType"
                                    className={inputClass}
                                    value={formData.complaintType}
                                    onChange={handleChange}
                                    required={activeTab === 'complaint'}
                                >
                                    <option value="" disabled>Select type</option>
                                    {complaintTypes.map(type => ( // Lowercase mapping for backend enum match if needed, but display title case
                                        <option key={type} value={type.toLowerCase()}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* 6. Description / Message */}
                        <div>
                            <label className={labelClass}>Description / Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                className={inputClass}
                                placeholder={activeTab === 'rate' ? "Write your review here..." : "Describe the issue in detail..."}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* 7. File Upload (Optional) - DISABLED FOR NOW AS REQUESTED (Text only phase) */}

                        {/* 8. CAPTCHA - VISUAL ONLY FOR NOW */}
                        <div className="flex flex-col items-center pt-4 opacity-50 pointer-events-none grayscale">
                            {/* Reduced opacity to indicate not active yet */}
                            <div className="px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="captcha"
                                    className="w-5 h-5 rounded cursor-pointer accent-primary"
                                    checked
                                    readOnly
                                />
                                <label htmlFor="captcha" className="text-sm font-medium text-gray-600 select-none">
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
                            <button
                                type="submit"
                                disabled={status.loading || rating === 0}
                                className={`w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/95 hover:shadow-xl transform active:scale-[0.98] transition-all text-lg cursor-pointer flex justify-center items-center ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status.loading ? (
                                    <span className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                                ) : (
                                    activeTab === 'rate' ? 'Submit Rating' : 'Submit Complaint'
                                )}
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
