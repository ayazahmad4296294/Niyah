import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        "Technology", "Finance", "Hardware", "Pharmaceuticals",
        "Government", "Real Estate", "Retail"
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/companies/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`/companies/category/${encodeURIComponent(category)}`);
    };

    const keywordStyling = `cursor-pointer px-4 py-1 font-normal rounded-lg text-sm md:text-lg bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 whitespace-nowrap`;
    const buttonStyling = `px-6 py-3 font-semibold rounded-xl text-md bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 text-center`;

    return (
        <div className='w-full min-h-[500px] md:h-[500px] bg-[#FCFBF3] flex flex-col items-center justify-center pt-32 pb-16 px-6'>

            {/* Search Bar Container */}
            <form onSubmit={handleSearch} className='w-full max-w-2xl mb-3'>
                <div className='flex flex-col md:flex-row items-center gap-3 w-full'>
                    <div className='relative w-full'>
                        <CiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl' />
                        <input
                            type="text"
                            placeholder='Search Companies...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full h-[50px] pl-12 pr-6 rounded-xl focus:outline-none focus:border-primary border bg-white border-primary transition-all text-lg'
                        />
                    </div>
                    <button type="submit" className='w-full md:w-auto px-6 h-[50px] rounded-xl text-white bg-primary font-bold cursor-pointer hover:bg-primary/90 transition-colors shadow-lg active:scale-95'>
                        Search
                    </button>
                </div>
            </form>

            {/* Keywords Section */}
            <div className='flex flex-wrap items-center justify-start max-w-2xl gap-3 mb-16'>
                {categories.map(cat => (
                    <div
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={keywordStyling}
                    >
                        {cat}
                    </div>
                ))}
            </div>

            {/* Hero Buttons */}
            <div className='flex items-center justify-center gap-4'>
                <Link to="/reviews" className={buttonStyling}>
                    Write a Review
                </Link>
                <Link to="/new-company" className={buttonStyling}>
                    Verify Your Company
                </Link>
            </div>
        </div>
    )
}

export default Header
