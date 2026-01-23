import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaCircleCheck, FaStar, FaArrowLeft, FaShieldHalved, FaLink } from 'react-icons/fa6';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const CompanyVerification = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await fetch(`/api/companies/${companyId}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Verification record not found');
                    }
                    throw new Error('Failed to fetch verification data');
                }
                const data = await response.json();
                setCompany(data);
            } catch (err) {
                console.error('Error fetching verification:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (companyId) {
            fetchCompany();
        }
    }, [companyId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !company) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="grow flex flex-col items-center justify-center px-4">
                    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center border-t-4 border-red-500">
                        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaShieldHalved size={40} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Record Not Found</h1>
                        <p className="text-gray-500 mb-8">{error || "The company you are looking for does not have an active verification record in our system."}</p>
                        <button 
                            onClick={() => navigate('/')}
                            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            Return to Directory
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const updatedAtDate = new Date(company.updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="grow py-20 px-4 md:px-10">
                <div className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </button>

                    {/* Main Verification Card */}
                    <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
                        {/* Header Banner */}
                        <div className="bg-primary p-10 text-center text-white relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                            
                            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg">
                                <FaCircleCheck />
                                <span>NIYA PACT CERTIFIED™</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{company.name}</h1>
                            <p className="text-white/70 font-medium">Official Verification Record</p>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12 space-y-12">
                            {/* Summary Metadata */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-100">
                                <div className="text-center md:text-left">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Category</span>
                                    <span className="text-lg font-bold text-primary">{company.category}</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Trust Score</span>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="flex gap-0.5 text-secondary">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} size={16} className={i < Math.floor(company.trustScore) ? "fill-current" : "text-gray-200"} />
                                            ))}
                                        </div>
                                        <span className="text-lg font-bold text-primary">{company.trustScore}</span>
                                    </div>
                                </div>
                                <div className="text-center md:text-right">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Last Updated</span>
                                    <span className="text-lg font-bold text-primary">{updatedAtDate}</span>
                                </div>
                            </div>

                            {/* Verification Details */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <FaShieldHalved className="text-primary" />
                                    Verification Details
                                </h3>
                                
                                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-6 border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
                                        <div>
                                            <span className="text-sm font-bold text-gray-400 block mb-1 uppercase tracking-tight">Verification ID</span>
                                            <code className="text-primary font-mono font-bold text-lg select-all">{company.verificationId}</code>
                                        </div>
                                        <div className="md:text-right">
                                            <span className="text-sm font-bold text-gray-400 block mb-1 uppercase tracking-tight">Status Source</span>
                                            <span className="inline-flex items-center gap-2 font-bold text-gray-700">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                                {company.blockchainStatus}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Blockchain Information</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                <span className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Node Network</span>
                                                <span className="font-bold text-gray-700 text-sm">Mainnet Support (Test Mode)</span>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                <span className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Status</span>
                                                <span className="font-bold text-green-600 text-sm flex items-center gap-1">
                                                    <FaCircleCheck size={12}/> {company.blockchainSync}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-gray-200 overflow-hidden">
                                            <span className="text-[10px] font-bold text-gray-400 block mb-2 uppercase items-center gap-1">
                                                <FaLink size={10} /> Transaction Hash
                                            </span>
                                            <div className="font-mono text-[10px] md:text-xs text-gray-500 break-all bg-gray-50 p-3 rounded-lg border border-gray-100 cursor-help" title="Mock Hash for Verification Demo">
                                                {company.transactionHash}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions / CTA */}
                            <div className="pt-8 flex flex-col items-center gap-6">
                                <Link 
                                    to={`/company/${company._id}`}
                                    className="w-full max-w-sm py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-primary/95 transition-all text-center group flex items-center justify-center gap-3 active:scale-95"
                                >
                                    <span>View Full Profile</span>
                                    <FaArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                                    Powered by Niya Verification System
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CompanyVerification;
