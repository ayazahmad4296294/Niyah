import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CompanyCard from '../components/company/CompanyCard';
import bgImage from '../assets/images/certifiedcompaniesheaher.png';
import { useCompany } from '../context/CompanyContext';

const CertifiedCompanies = () => {
    const { companies } = useCompany();
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
            <div className='relative z-20 bg-white min-h-[800px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] py-16 px-6 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    {/* Render 12 Company Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
                        {companies.slice(0, 12).map((company, index) => (
                            <CompanyCard key={company._id} company={company} index={index} />
                        ))}
                    </div>

                    {/* Pagination Buttons (UI Only) */}
                    <div className='flex items-center justify-center gap-2 border-t border-gray-100'>
                        <button className='w-10 h-10 flex items-center justify-center bg-primary text-white font-bold transition-all hover:bg-secondary cursor-pointer'>
                            1
                        </button>
                        <button className='w-10 h-10 flex items-center justify-center bg-white text-primary border-2 border-primary font-bold transition-all hover:bg-gray-50 cursor-pointer'>
                            2
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CertifiedCompanies;
