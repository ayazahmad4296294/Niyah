import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BlogCard from '../components/blog/BlogCard';
import bgImage from '../assets/images/certifiedcompaniesheaher.png'; // Reusing header image for consistency
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs');
                if (response.data.success) {
                    setBlogs(response.data.data);
                }
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blogs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className='w-full'>
            <Navbar />

            {/* Header Section */}
            <div className='relative w-full h-[420px] flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden'>
                <img
                    src={bgImage}
                    alt="Blog Header Background"
                    className='absolute inset-0 w-full h-full object-cover -z-20'
                />
                <div className='absolute inset-0 h-full w-full bg-primary/70 -z-10'></div>

                <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
                    Blog
                </h1>
            </div>

            {/* Content Section */}
            <div className='relative z-20 bg-white min-h-[400px] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] px-6 pt-16 md:px-10'>
                <div className='max-w-7xl mx-auto'>
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-600">
                            {error}
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16'>
                                    {blogs.map((blog, index) => (
                                        <BlogCard key={blog._id} blog={blog} index={index} />
                                    ))}
                                </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;