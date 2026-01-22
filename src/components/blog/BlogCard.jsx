import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

const BlogCard = ({ blog, index }) => {
    if (!blog) return null;

    return (
        <div
            className="rounded-xl overflow-hidden border border-primary/10 flex flex-col h-full transition-all duration-300 shadow-gray-400 hover:shadow-xl"
        >
            {/* Image Section - Using Local Import */}
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={logo}
                    alt={blog.title}
                    className="w-full h-full object-contain p-4"
                />
                {/* Blog Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-md text-xs font-bold shadow-md">
                    Blog
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-primary p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 min-h-3">
                    {blog.title}
                </h3>

                <Link to="#" className="text-secondary font-medium hover:underline flex items-center gap-1 mt-auto">
                    Read more
                </Link>

                <hr className="border-white/10 my-4" />

                {/* Meta Info Section */}
                <div className="flex items-center text-[11px] text-white/60 font-medium">
                    <span>{blog.date}</span>
                    <span className="mx-2">·</span>
                    <span>{blog.time}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
