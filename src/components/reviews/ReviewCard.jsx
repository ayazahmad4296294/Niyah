import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaStar, FaUser } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCompany } from "../../context/CompanyContext";

const ReviewCard = () => {
   const { companies } = useCompany();
   const [reviews, setReviews] = useState([]);
   const [totalReviews, setTotalReviews] = useState(0);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchReviews = async () => {
         try {
            const response = await fetch('/api/reviews');
            if (!response.ok) {
               throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            if (data.success) {
               setReviews(data.data);
               setTotalReviews(data.pagination?.totalItems || data.data.length);
            } else {
               setError('Failed to load reviews');
            }
         } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Unable to load recent reviews.');
         } finally {
            setLoading(false);
         }
      };
      fetchReviews();
   }, []);

   const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      slidesToShow: 4,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   };

   return (
      <div className="overflow-hidden pb-12">
         <div className="max-w-7xl mx-auto px-1">

            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl text-primary font-semibold inline-block">
                  Customer Reviews
               </h2>
               <Link to="/reviews" className="px-3 py-1 bg-secondary text-white rounded-full text-md hover:bg-secondary/90 transition-colors">
                  {totalReviews} Reviews
               </Link>
            </div>

            {/* Reviews Slider */}
            <div className="recent-reviews-slider">
               {loading ? (
                  <div className="text-center py-10 text-primary font-bold">Loading Reviews...</div>
               ) : error ? (
                  <div className="text-center py-10 text-red-500 font-bold">{error}</div>
               ) : reviews.length > 0 ? (
                     <Slider {...settings}>
                        {reviews.map((review) => {
                           // companyId is the _id from mongodb
                           const reviewCompany = companies.find(c => c._id === review.companyId);

                           // Fallback values in case data is missing
                           const reviewerName = review.name || "Anonymous";
                           const reviewerRating = review.rating || 5;
                           const reviewText = review.reviewText || "No review text.";
                           // If reviewCompany found, use its name, otherwise fallback to "Unknown Company". 
                           // Do NOT use companyId as name.
                           const companyName = reviewCompany?.name || "Unknown Company";
                           const companyWebsite = reviewCompany?.website || "Website not found";

                           return (
                              <div key={review._id} className="px-3 h-full">
                                 <div className="bg-primary text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 min-h-[230px] h-full">
                                    {/* User Info Header */}
                                    <div className="flex items-center gap-4 shrink-0">
                                       <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white overflow-hidden shrink-0">
                                          <FaUser size={20} />
                                       </div>
                                       <div className="flex flex-col gap-1 overflow-hidden">
                                          <h3 className="font-bold text-lg leading-none truncate">{reviewerName}</h3>
                                          <div className="flex gap-1 mt-1">
                                             {[...Array(5)].map((_, index) => (
                                                <div
                                                   key={index}
                                                   className={`w-6 h-6 flex items-center justify-center rounded-sm ${index < reviewerRating ? "bg-secondary" : "bg-[#D1D5DB]"
                                                   }`}
                                             >
                                                <FaStar className="text-white text-[12px]" />
                                             </div>
                                          ))}
                                          </div>
                                       </div>
                                    </div>

                                    {/* Review Text - with line clamp for overflow protection */}
                                    <div className="grow">
                                       <p className="text-md font-medium text-gray-100 line-clamp-4 wrap-break-word">
                                          {reviewText}
                                       </p>
                                    </div>

                                    {/* Footer line and Company Data */}
                                    <div className="flex flex-col gap-4 shrink-0 mt-auto">
                                       <hr className="border-white opacity-90" />
                                       <div className="flex items-center gap-3">
                                          <div className="w-7 h-7 rounded-md bg-white p-1 shrink-0 overflow-hidden flex items-center justify-center">
                                             {reviewCompany && reviewCompany.image ? (
                                                <img
                                                   src={reviewCompany.image}
                                                   alt={companyName}
                                                   className="w-full h-full object-contain"
                                                />
                                             ) : (
                                                <div className="w-full h-full bg-gray-200" />
                                             )}
                                          </div>
                                       <div className="flex flex-col overflow-hidden">
                                             <p className="text-sm font-semibold truncate">{companyName}</p>
                                             <p className="text-xs text-gray-400 truncate">{companyWebsite}</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </Slider>
               ) : (
                  <div className="text-center py-10 text-gray-500">No reviews found.</div>
               )}
            </div>
         </div>
      </div>
   );
}


export default ReviewCard