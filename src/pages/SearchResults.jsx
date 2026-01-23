/**
 * SearchResults.jsx - Multi-Entity Search Engine
 * This page aggregates data across different resources (Companies and Reviews)
 * based on category filters or textual search queries.
 */

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import CompanyCard from '../components/company/CompanyCard';
import ReviewCard from '../components/reviews/ReviewCard';
import axios from 'axios';

const SearchResults = () => {
    // Parameter extraction from both path (:category) and query (?q=...)
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');

    // Aggregate Data State
    const [companies, setCompanies] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Independent Pagination Management for two different datasets
    const [companyPage, setCompanyPage] = useState(1);
    const [companyTotalPages, setCompanyTotalPages] = useState(1);
    const [reviewPage, setReviewPage] = useState(1);
    const [reviewTotalPages, setReviewTotalPages] = useState(1);

    const companyLimit = 12;
    const reviewLimit = 9;

    /**
     * Holistic Search Orchestration
     * 1. Fetches companies matching the filter/query.
     * 2. Uses the resulting IDs to fetch contextual reviews, ensuring SEO-friendly relevance.
     */
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Construct dynamic URL for Company filtering
                let companyUrl = `/api/companies?page=${companyPage}&limit=${companyLimit}`;
                if (category) companyUrl += `&category=${encodeURIComponent(category)}`;
                if (searchQuery) companyUrl += `&search=${encodeURIComponent(searchQuery)}`;

                const compRes = await axios.get(companyUrl);
                const fetchedCompanies = compRes.data.data;
                setCompanies(fetchedCompanies);
                setCompanyTotalPages(compRes.data.pagination.totalPages);

                /**
                 * Contextual Review Fetching:
                 * If companies are found, pull their most recent reviews to show on the same page.
                 */
                if (fetchedCompanies.length > 0) {
                    const companyIds = fetchedCompanies.map(c => c._id).join(',');
                    const reviewRes = await axios.get(`/api/reviews?companyIds=${companyIds}&page=${reviewPage}&limit=${reviewLimit}`);
                    setReviews(reviewRes.data.data);
                    setReviewTotalPages(reviewRes.data.pagination.totalPages);
                } else {
                    setReviews([]);
                    setReviewTotalPages(1);
                }

            } catch (err) {
                console.error('Search results error:', err);
                setError('Failed to load results.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category, searchQuery, companyPage, reviewPage]);

    const handleCompanyPageChange = (page) => {
        if (page >= 1 && page <= companyTotalPages) {
            setCompanyPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Visual reset for user
        }
    };

    const handleReviewPageChange = (page) => {
        if (page >= 1 && page <= reviewTotalPages) {
            setReviewPage(page);
        }
    };

    return (
        <div className='w-full bg-gray-50'>
            <Navbar />
            <Header />

            <main className='max-w-7xl mx-auto py-16 px-6'>
                {/* Dynamic Header Display based on search intent */}
                <h1 className='text-3xl font-bold text-primary mb-10'>
                    {category ? `Category: ${category}` : searchQuery ? `Search Results for "${searchQuery}"` : "All Companies"}
                </h1>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 text-red-500 font-bold">{error}</div>
                ) : (
                    <>
                                {/* Directory Section: Grid of Company Cards */}
                                <section className='mb-20'>
                            {companies.length > 0 ? (
                                <>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                                        {companies.map((company, index) => (
                                            <CompanyCard key={company._id} company={company} index={index} />
                                        ))}
                                    </div>

                                            {/* Traditional Page-based Navigation */}
                                    {companyTotalPages > 1 && (
                                        <div className='flex items-center justify-center gap-2 mt-12'>
                                            <button onClick={() => handleCompanyPageChange(companyPage - 1)} disabled={companyPage === 1} className="px-4 py-2 border rounded disabled:opacity-50">Prev</button>
                                            {[...Array(companyTotalPages)].map((_, i) => (
                                                <button key={i} onClick={() => handleCompanyPageChange(i + 1)} className={`w-10 h-10 rounded ${companyPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-primary border'}`}>{i + 1}</button>
                                            ))}
                                            <button onClick={() => handleCompanyPageChange(companyPage + 1)} disabled={companyPage === companyTotalPages} className="px-4 py-2 border rounded disabled:opacity-50">Next</button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className='text-gray-500'>No companies found matching your criteria.</p>
                            )}
                                </section>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default SearchResults;
