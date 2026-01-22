import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const NewCompanyForm = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        companyName: '',
        companyUrl: '',
        country: '',
        employeesCount: '1-10',
        industries: [],
        customIndustry: '',
        address: '',
        contactName: '',
        contactRole: '',
        contactEmail: '',
        contactPhone: '',
        purpose: '',
        values: '',
        certificationReasons: [],
        employeeListeningMethods: [],
        internalTrustLevel: 'Strong',
        challenges: '',
        beneficiaries: '',
        positiveImpact: '',
        existingCertifications: '',
        publicReporting: '',
        declarationAccepted: false,
        preScreeningCall: false,
        isRobotChecked: false
    });

    // Authentication Check
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in to submit an application.');
            navigate('/login');
        }
    }, [navigate]);

    // Pre-fill user data if available
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                contactName: user.name || prev.contactName,
                contactEmail: user.email || prev.contactEmail
            }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleArrayChange = (category, value) => {
        setFormData(prev => {
            const current = prev[category];
            if (current.includes(value)) {
                return { ...prev, [category]: current.filter(item => item !== value) };
            } else {
                return { ...prev, [category]: [...current, value] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.isRobotChecked) {
            alert('Please confirm you are not a robot.');
            return;
        }

        if (!formData.declarationAccepted) {
            alert('You must accept the declaration to submit.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/companyapplications', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.success) {
                alert('Company application submitted successfully!');
                navigate('/'); // Redirect to home or a success page
            } else {
                // If nested errors exist, format them
                if (response.data.errors) {
                    const errorMsgs = Object.values(response.data.errors).map(err => err.message).join(', ');
                    setError(errorMsgs);
                } else {
                    setError(response.data.message || 'Failed to submit application');
                }
            }
        } catch (err) {
            console.error('Submission error:', err);
            const backendError = err.response?.data;
            if (backendError?.errors) {
                const errorMsgs = Object.values(backendError.errors).map(e => e.message).join(', ');
                setError(`${backendError.message}: ${errorMsgs}`);
            } else {
                setError(backendError?.message || err.message || 'Server error. Please try again later.');
            }
        } finally {
            setLoading(false);
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
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-2">Niya Pact™ Certification Application</h1>
                    <p className="text-xl text-primary font-light">Start your Niya Pact certification process</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
                        {error}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-12">

                        {/* SECTION 1: ORGANIZATION DETAILS */}
                        <section>
                            <h2 className={sectionHeaderClass}>ORGANIZATION DETAILS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Company Name *</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="Enter company name"
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Company URL *</label>
                                    <input
                                        type="text"
                                        name="companyUrl"
                                        required
                                        value={formData.companyUrl}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="www.example.com"
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Country of Headquarters *</label>
                                    <select
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                    >
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Number of Employees</label>
                                    <select
                                        name="employeesCount"
                                        value={formData.employeesCount}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                    >
                                        <option value="1-10">1–10</option>
                                        <option value="11-50">11–50</option>
                                        <option value="51-200">51–200</option>
                                        <option value="201-1000">201–1000</option>
                                        <option value="1001+">1001+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Industry / Sector *</label>
                                    <div className="h-32 overflow-y-auto border border-gray-300 rounded-lg p-2 space-y-1">
                                        {['Hardware', 'Finance', 'Technology', 'Health', 'Banking', 'Insurance', 'Retail', 'Energy'].map(industry => (
                                            <label key={industry} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.industries.includes(industry)}
                                                    onChange={() => handleArrayChange('industries', industry)}
                                                    className="rounded text-primary focus:ring-primary"
                                                />
                                                {industry}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Add Custom Industry (optional)</label>
                                    <input
                                        type="text"
                                        name="customIndustry"
                                        value={formData.customIndustry}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="Enter a custom industry"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClass}>Company Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="Enter your company address"
                                    />
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
                                    <input
                                        type="text"
                                        name="contactName"
                                        required
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Role / Position *</label>
                                    <input
                                        type="text"
                                        name="contactRole"
                                        required
                                        value={formData.contactRole}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="e.g., CEO, Director, Manager"
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        required
                                        value={formData.contactEmail}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="contact@company.com"
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="contactPhone"
                                        required
                                        value={formData.contactPhone}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 3: PURPOSE & INTENTION */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>PURPOSE & INTENTION</h2>
                            <div>
                                <label className={labelClass}>What is the core purpose of your organization? *</label>
                                <textarea
                                    name="purpose"
                                    required
                                    value={formData.purpose}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={inputClass}
                                    placeholder="Describe the core purpose and mission"
                                ></textarea>
                            </div>
                            <div>
                                <label className={labelClass}>Which values guide your decisions internally? *</label>
                                <textarea
                                    name="values"
                                    required
                                    value={formData.values}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={inputClass}
                                    placeholder="Describe the values"
                                ></textarea>
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
                                                checked={formData.certificationReasons.includes(option)}
                                                onChange={() => handleArrayChange('certificationReasons', option)}
                                                className="rounded text-primary focus:ring-primary"
                                            />
                                            <span className="text-sm text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
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
                                                checked={formData.employeeListeningMethods.includes(option)}
                                                onChange={() => handleArrayChange('employeeListeningMethods', option)}
                                                className="rounded text-primary focus:ring-primary"
                                            />
                                            <span className="text-sm text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>How would you describe trust inside your organization today?</label>
                                <select
                                    name="internalTrustLevel"
                                    value={formData.internalTrustLevel}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                >
                                    <option value="Strong">Strong</option>
                                    <option value="Inconsistent">Inconsistent</option>
                                    <option value="Developing">Developing</option>
                                    <option value="Needs improvement">Needs improvement</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>What are your biggest cultural or ethical challenges?</label>
                                <textarea
                                    name="challenges"
                                    value={formData.challenges}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={inputClass}
                                    placeholder="Enter your challenges here..."
                                ></textarea>
                            </div>
                        </section>

                        <hr className="border-gray-300" />

                        {/* SECTION 5: IMPACT & RESPONSIBILITY */}
                        <section className="space-y-6">
                            <h2 className={sectionHeaderClass}>IMPACT & RESPONSIBILITY</h2>
                            <div>
                                <label className={labelClass}>Who benefits from your organization’s decisions? *</label>
                                <textarea
                                    name="beneficiaries"
                                    required
                                    value={formData.beneficiaries}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={inputClass}
                                    placeholder="List key beneficiaries"
                                ></textarea>
                            </div>
                            <div>
                                <label className={labelClass}>What positive impact are you already creating? *</label>
                                <textarea
                                    name="positiveImpact"
                                    required
                                    value={formData.positiveImpact}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={inputClass}
                                    placeholder="Describe your current positive impact"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClass}>Do you currently have any certifications or ethical labels?</label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="existingCertifications"
                                                value="yes"
                                                checked={formData.existingCertifications === 'yes'}
                                                onChange={handleInputChange}
                                                className="text-primary focus:ring-primary"
                                            />
                                            <span>Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="existingCertifications"
                                                value="no"
                                                checked={formData.existingCertifications === 'no'}
                                                onChange={handleInputChange}
                                                className="text-primary focus:ring-primary"
                                            />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Does your organization publicly report on impact or ethics?</label>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {['Yes', 'Not yet', 'In progress'].map(status => (
                                            <label key={status} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="publicReporting"
                                                    value={status.toLowerCase().replace(' ', '-')}
                                                    checked={formData.publicReporting === status.toLowerCase().replace(' ', '-')}
                                                    onChange={handleInputChange}
                                                    className="text-primary focus:ring-primary"
                                                />
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
                                    <input
                                        type="checkbox"
                                        name="declarationAccepted"
                                        checked={formData.declarationAccepted}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm">I confirm that all information provided is accurate and submitted in good faith. *</span>
                                </label>
                                <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <input
                                        type="checkbox"
                                        name="preScreeningCall"
                                        checked={formData.preScreeningCall}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded text-primary focus:ring-primary"
                                    />
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
                                    name="isRobotChecked"
                                    checked={formData.isRobotChecked}
                                    onChange={handleInputChange}
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

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full max-w-sm py-4 bg-primary text-white font-bold rounded-xl shadow-lg transform active:scale-[0.98] transition-all text-lg ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/95 hover:shadow-xl'}`}
                            >
                                {loading ? 'Submitting...' : 'Submit Application'}
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
