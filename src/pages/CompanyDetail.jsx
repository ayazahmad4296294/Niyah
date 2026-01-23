import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCompany } from '../context/CompanyContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineMail, HiOutlineGlobeAlt, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaStar, FaUser, FaCircleCheck } from 'react-icons/fa6';
import ReviewForm from '../components/reviews/ReviewForm';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { companies } = useCompany();
  const { user } = useAuth(); // Get user from AuthContext
  const navigate = useNavigate(); // Use navigate for redirection
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewError, setReviewError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [limit, setLimit] = useState(4); // Default to 4 reviews initially
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Find the company based on the dynamic ID
  const company = companies.find((c) => c._id === companyId);

  // Move useEffect UP so it is not conditional
  useEffect(() => {
    if (!company?._id) return; // Guard clause inside the effect

    const fetchReviews = async () => {
      setLoadingReviews(true);
      try {
        // Use the new paginated reviews endpoint
        const response = await fetch(`/api/companies/${company._id}/reviews?page=${currentPage}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        if (data.success) {
          setCompanyReviews(data.data);
          setTotalPages(data.pagination.totalPages);
        } else {
          setReviewError('Failed to load reviews.');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviewError('Unable to load reviews for this company.');
      } finally {
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, [company?._id, currentPage, limit, refreshTrigger]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleReviewClick = () => {
    if (!user) {
      if (window.confirm("You must be logged in to write a review. Go to login page?")) {
        navigate('/login');
      }
      return;
    }
    setIsReviewFormOpen(!isReviewFormOpen);
  };

  if (!company) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Company Not Found</h1>
            <p className="text-lg text-gray-600">The company you are looking for does not exist or has been removed.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFBF3]">
      <Navbar />

      <div className="grow pt-32 pb-20 px-6 max-w-6xl mx-auto w-full space-y-16">

        {/* Section 1: Overview & Map (60/40 Split) */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left (50%): Company Overview */}
          <div className="w-full lg:w-[60%]">
            <section className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-400 h-full">
              <h2 className="text-2xl font-bold text-primary mb-8 border-b border-gray-300 pb-4">Overview</h2>

              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-black mb-2">{company.name}</h1>
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-semibold text-xs rounded-md border border-secondary/20 uppercase tracking-wider">
                    {company.category}
                  </span>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {company.description || "No description provided."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <HiOutlineMail size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                      <p className="font-medium text-primary">{company.email || "Not provided"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <HiOutlineGlobeAlt size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Website</p>
                      <p className="font-medium text-primary break-all">{company.website || "Not provided"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <HiOutlinePhone size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Phone</p>
                      <p className="font-medium text-primary">{company.phone || "Not provided"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <HiOutlineLocationMarker size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Address</p>
                      <p className="font-medium text-primary">{company.address || "Not provided"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right (50%): Company Location Map */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-400 p-4 overflow-hidden h-full flex flex-col">
              <div className="grow w-full bg-gray-100 rounded-xl relative flex items-center justify-center overflow-hidden min-h-[300px]">
                <iframe
                  title="Map Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Silicon%20Valley+(Niyah)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Verification Area (50/50 Split) */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left (50%): Verification Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-400 p-8 flex flex-col items-center text-center h-full justify-center">
              <div className="w-20 h-20 bg-primary/5 rounded-2xl p-4 mb-6 flex items-center justify-center border border-primary/5">
                {/* Fallback to text if no image (since we don't store images in DB) */}
                <span className="text-3xl font-bold text-primary">{company.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-1">{company.name}</h3>
              <div className="flex items-center gap-2 text-green-600 font-bold mb-4">
                <FaCircleCheck size={18} />
                <span>{company.verificationStatus}</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 border-t border-gray-100 pt-4 w-full">
                Official verified organization under the Niya Pact™ framework.
              </p>

              <div className="w-full flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-400 uppercase text-xs">Trust Score</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} className={i < Math.floor(company.trustScore) ? "text-secondary" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="font-bold text-primary">{company.trustScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right (50%): Seal Verification Block */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-400 p-8 text-center space-y-6 h-full flex flex-col justify-center">
              <h4 className="text-md font-bold text-primary uppercase tracking-widest">Seal Verification</h4>
              <div className="flex justify-center gap-8 items-center bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                <div className="w-24 h-24 bg-white p-2 rounded-lg border border-gray-200">
                  <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NiyahVerification')] bg-cover bg-center"></div>
                </div>
                <div className="w-24 h-24 bg-primary text-white rounded-full flex flex-col items-center justify-center p-2 shadow-lg">
                  <span className="text-[10px] font-bold uppercase leading-tight">Verified</span>
                  <span className="text-[12px] font-black uppercase tracking-tighter">Niya Pact™</span>
                  <span className="text-[8px] opacity-70">2025</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium">Scan QR code to verify real-time certification status.</p>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION (Full Width) */}
        <section id="reviews">
          <div className="flex items-center justify-between mb-8 text-center">
            <h2 className="text-3xl font-bold text-primary w-full md:text-left">Company Reviews</h2>
          </div>

          {loadingReviews && companyReviews.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-primary font-semibold">Loading reviews...</p>
            </div>
          ) : reviewError ? (
            <div className="text-center py-10">
              <p className="text-red-500 font-semibold">{reviewError}</p>
            </div>
          ) : companyReviews.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {companyReviews.map((review) => (
                      <div key={review._id} className="bg-primary text-white p-6 rounded-xl shadow-md flex flex-col gap-4 min-h-[220px]">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white shrink-0">
                            <FaUser size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg leading-none">{review.name}</h3>
                            <div className="flex gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-5 h-5 flex items-center justify-center rounded-sm ${i < review.rating ? "bg-secondary" : "bg-gray-400"}`}>
                                  <FaStar size={10} className="text-white" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm grow text-gray-100 italic">"{review.reviewText}"</p>
                      </div>
                    ))}
                  </div>

                  {/* See All Button */}
                  {!showAllReviews && totalPages > 1 && (
                    <div className='flex items-center justify-center mt-8'>
                      <button
                        onClick={() => {
                          setShowAllReviews(true);
                          setLimit(9); // Increase limit or 100 to show more, logic handles in useEffect
                        }}
                        className="bg-secondary text-primary font-bold py-2 px-6 rounded-lg shadow hover:bg-secondary/90 transition-colors"
                      >
                        See All Reviews
                      </button>
                    </div>
                  )}

                  {/* Pagination Controls - Only show if showing all reviews */}
                  {showAllReviews && totalPages > 1 && (
                    <div className='flex items-center justify-center gap-2 mt-8'>
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
                          className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer ${currentPage === i + 1 ? 'bg-primary text-white shadow-lg' : 'bg-white border border-primary/10 text-primary hover:bg-primary/5'}`}
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
                  )}
                </>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-gray-300">
              <p className="text-gray-500">No reviews found for this company yet.</p>
            </div>
          )}

          {/* Review Action Buttons BELOW the grid */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <button
              onClick={handleReviewClick}
              className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary/90 transition-all shadow-lg active:scale-95 w-full sm:w-auto"
            >
              {isReviewFormOpen ? "Cancel Review" : "Write a Review"}
            </button>
          </div>
        </section>

        {/* Combined Container for Form and CTA */}
        <div className={`flex flex-col ${isReviewFormOpen ? 'lg:flex-row items-stretch' : ''} gap-8`}>

          {/* Review Form Section (Left Side when open) */}
          {isReviewFormOpen && (
            <div className="w-full lg:w-1/2 transition-all duration-300 ease-in-out">
              <ReviewForm
                companyName={company.name}
                companyId={company._id}
                onReviewSubmitted={() => {
                  setIsReviewFormOpen(false);
                  setCurrentPage(1);
                  setRefreshTrigger(prev => prev + 1);
                }}
              />
            </div>
          )}

          {/* RATE & COMPLAINT CTA (Right Side when form is open, Full Width otherwise) */}
          <section className={`${isReviewFormOpen ? 'lg:w-1/2' : 'w-full'} bg-primary p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-8 border-4 border-secondary/10 transition-all duration-300`}>

            <div className="text-white text-center">
              <h3 className="text-3xl font-bold mb-3">Rate or Report This Company</h3>
              <p className="text-lg text-white/70 w-full">Help the community by sharing your feedback or filing an official complaint.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link
                to={`/file-complaint?mode=rate&companyId=${company._id}`}
                className="px-5 py-3 bg-secondary text-primary font-bold rounded-2xl text-center hover:bg-secondary/90 transition-all shadow-lg active:scale-95 whitespace-nowrap"
              >
                Rate This Company
              </Link>
              <Link
                to={`/file-complaint?mode=complaint&companyId=${company._id}`}
                className="px-5 py-3 bg-white text-primary font-bold rounded-2xl text-center hover:bg-gray-100 transition-all shadow-lg active:scale-95 border-2 border-primary/5 whitespace-nowrap"
              >
                File a Complaint
              </Link>
            </div>

          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyDetail;
