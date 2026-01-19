import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { CiSearch } from "react-icons/ci";
import { FaStar, FaUser } from "react-icons/fa6";
import { ReviewsData } from '../data/reviewData';

const Reviews = () => {
  const keywordStyling = `px-4 py-1 font-normal rounded-lg text-sm md:text-lg bg-primary text-white hover:bg-secondary hover:text-black transition-all duration-300 whitespace-nowrap`;

  return (
    <div className='w-full bg-[#FCFBF3]'>
      <Navbar />

      {/* Header Section (Reusing Home/Header layout) */}
      <div className='w-full flex flex-col items-center justify-center pt-32 pb-16 px-6'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-4xl font-bold text-primary mb-3'>
            Find a company you can trust
          </h1>
          <p className='text-xl md:text-2xl text-primary/70'>
            Discover, read, and write review
          </p>
        </div>

        {/* Search Bar Container */}
        <div className='w-full max-w-2xl mb-3'>
          <div className='flex flex-col md:flex-row items-center gap-3 w-full'>
            <div className='relative w-full'>
              <CiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl' />
              <input
                type="text"
                placeholder='Search Companies...'
                className='w-full h-[50px] pl-12 pr-6 rounded-xl focus:outline-none focus:border-primary border bg-white border-primary transition-all text-lg'
              />
            </div>
            <button className='w-full md:w-auto px-6 h-[50px] rounded-xl text-white bg-primary font-bold cursor-pointer hover:bg-primary/90 transition-colors shadow-lg active:scale-95'>
              Search
            </button>
          </div>
        </div>

        {/* Keywords Section */}
        <div className='flex flex-wrap items-center justify-left max-w-2xl gap-3 mb-6'>
          <Link to="/" className={keywordStyling}>Technology</Link>
          <Link to="/" className={keywordStyling}>Finance</Link>
          <Link to="/" className={keywordStyling}>Hardware</Link>
          <Link to="/" className={keywordStyling}>Pharmaceuticals</Link>
          <Link to="/" className={keywordStyling}>Government</Link>
          <Link to="/" className={keywordStyling}>Weiss Moccoy Inc</Link>
          <Link to="/" className={keywordStyling}>Aerospace</Link>
        </div>
      </div>

      {/* Reviews Grid Section */}
      <div className='max-w-6xl mx-auto px-6 pb-20'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-4xl md:text-4xl font-bold text-primary mb-3'>Recent Reviews</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {ReviewsData.map((data) => (
            <div key={data.id} className="h-full">
              <div className="bg-primary text-white p-6 rounded-xl shadow-lg h-full flex flex-col gap-4 min-h-[220px]">
                {/* User Info Header */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white overflow-hidden shrink-0">
                    <FaUser size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg leading-none">{data.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 flex items-center justify-center rounded-sm ${index < data.rating ? "bg-secondary" : "bg-[#D1D5DB]"
                            }`}
                        >
                          <FaStar className="text-white text-[12px]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="grow">
                  <p className="text-md font-medium text-gray-100">{data.text}</p>
                </div>

                {/* Footer line and Company Data */}
                <div className="flex flex-col gap-4">
                  <hr className="border-white opacity-40" />
                  <div className="flex items-center gap-3">
                    {data.company ? (
                      <>
                        <div className="w-7 h-7 rounded-md bg-white p-1 shrink-0 overflow-hidden">
                          <img
                            src={data.company.image}
                            alt={data.company.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <p className="text-sm font-semibold truncate">{data.company.name}</p>
                          <p className="text-xs text-gray-400 truncate">{data.company.website}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-7 h-7 mt-1 rounded-md bg-white opacity-50 shrink-0"></div>
                        <div className="flex flex-col gap-1 w-full">
                          <div className="h-3 bg-gray-500 rounded-sm w-1/2"></div>
                          <div className="h-2 bg-gray-600 rounded-sm w-3/4"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className='flex items-center justify-center gap-2'>
          <button className='w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium hover:bg-secondary hover:text-black transition-all'>1</button>
          <button className='w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-primary/10 text-primary font-medium hover:bg-primary/5 transition-all'>2</button>
          <button className='w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-primary/10 text-primary font-medium hover:bg-primary/5 transition-all'>3</button>
          <span className='mx-2 text-primary/40 text-xl font-bold'>...</span>
          <button className='px-4 h-10 flex items-center justify-center rounded-lg bg-white border border-primary/10 text-primary font-medium hover:bg-primary/5 transition-all'>Next</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;