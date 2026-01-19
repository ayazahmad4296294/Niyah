import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BlogCard from '../components/blog/BlogCard';
import bgImage from '../assets/images/certifiedcompaniesheaher.png'; // Reusing header image for consistency
import { blogData } from '../data/blogData';

const Blog = () => {
    return (
        <div className='w-full'>
            <Navbar />

            {/* Header Section (Matching CertifiedCompanies exactly) */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden'>
                <img
                    src={bgImage}
                    alt="Blog Header Background"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />
                <div className='absolute inset-0 bg-primary/70 -z-10'></div>

                <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
                    Blog
                </h1>
            </div>

            {/* Content Section */}
            <div className='relative z-20 bg-white min-h-[200px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-6 pt-16 md:px-10'>
                <div className='max-w-7xl mx-auto'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16'>
                        {blogData.map((blog, index) => (
                            <BlogCard key={blog.id} blog={blog} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;