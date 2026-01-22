import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CompanyCard from '../components/company/CompanyCard';
import bgImage from '../assets/images/certifiedcompaniesheaher.png';

import axios from 'axios';

const CertifiedCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 12;

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/companies?page=${currentPage}&limit=${limit}`);
                if (response.data.success) {
                    setCompanies(response.data.data);
                    setTotalPages(response.data.pagination.totalPages);
                } else {
                    setError('Failed to fetch companies');
                }
            } catch (err) {
                console.error('Error fetching companies:', err);
                setError('An error occurred while fetching companies');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className='w-full'>

            {/* Navbar */}
            <Navbar />

            {/* Sticky Header Section */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden'>

                <img
                    src={bgImage}
                    alt="Certified Companies Background"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-primary/70 -z-10'></div>

                <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
                    Companies
                </h1>
                <p className='text-xl md:text-2xl font-medium max-w-2xl drop-shadow-md'>
                    Browse Niyah Pact Certified Companies
                </p>
            </div>

            {/* Content Section (Scrolls normally over the header) */}
            <div className='relative z-20 bg-white min-h-[600px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] py-16 px-6 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    {loading ? (
                        <div className="text-center py-20">
                            <p className="text-primary text-xl font-bold">Loading Companies...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <p className="text-red-500 text-xl font-bold">{error}</p>
                        </div>
                    ) : companies.length > 0 ? (
                        <>
                            {/* Render Company Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
                                        {companies.map((company, index) => (
                                            <CompanyCard key={company._id} company={company} index={index} />
                                        ))}
                                    </div>

                                    {/* Pagination UI */}
                                    <div className='flex items-center justify-center gap-2 border-t border-gray-100 pt-8'>
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`px-4 h-10 flex items-center justify-center rounded-lg border font-medium transition-all ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-primary/20 text-primary hover:bg-primary/5 cursor-pointer'}`}
                                        >
                                            Prev
                                        </button>

                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`w-10 h-10 flex items-center justify-center font-bold transition-all cursor-pointer ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-primary border-2 border-primary/10 hover:bg-gray-50'}`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`px-4 h-10 flex items-center justify-center rounded-lg border font-medium transition-all ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-primary/20 text-primary hover:bg-primary/5 cursor-pointer'}`}
                                        >
                                            Next
                                        </button>
                                    </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-xl">No companies found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CertifiedCompanies;
