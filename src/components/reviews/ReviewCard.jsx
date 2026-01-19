import Slider from "react-slick";
import { FaStar, FaUser } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Example company image (using one from assets if available, or a placeholder)
import CompanyLogo from "../../assets/images/logo.webp";

const ReviewsData = [
   {
      id: 1,
      name: "kimjohn",
      text: "nice service",
      rating: 4,
      company: {
         name: "Home Tech",
         website: "Verified Electronics Store",
         image: CompanyLogo
      }
   },
   {
      id: 2,
      name: "stoke",
      text: "good service",
      rating: 1,
   },
   {
      id: 3,
      name: "Victor",
      text: "very helpful and verified",
      rating: 5,
      company: {
         name: "Eco Living",
         website: "Sustainable Home Decor",
         image: CompanyLogo
      }
   },
   {
      id: 4,
      name: "Morgan",
      text: "excellent support team",
      rating: 3,
      company: {
         name: "Safe Stay",
         description: "Security Solutions",
         image: CompanyLogo
      }
   },
   {
      id: 5,
      name: "Alice",
      text: "Impressive quality and speed",
      rating: 4,
      company: {
         name: "Sky High",
         website: "Aviation Services",
         image: CompanyLogo
      }
   },
   {
      id: 6,
      name: "Bob",
      text: "Reliable and trustworthy",
      rating: 5,
      company: {
         name: "Green Earth",
         website: "Eco Friendly products",
         image: CompanyLogo
      }
   },
];

const ReviewCard = () => {

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
      <div className=" overflow-hidden pb-12">
         <div className="max-w-7xl mx-auto px-1">
            {/* <h4
                    className="text-2xl text-primary inline-block mb-6"
                >Recent Reviews</h4> */}
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl text-primary font-semibold inline-block">
                  Customer Reviews For Home
               </h2>
               <button className="px-3 py-1 bg-secondary text-white rounded-full text-md">
                  {ReviewsData.length} Reviews
               </button>
            </div>

            {/* Reviews Slider */}
            <div className="recent-reviews-slider">
               <Slider {...settings}>
                  {ReviewsData.map((data) => (
                     <div key={data.id} className="px-3">
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
                           <div className="">
                              <p className="text-md font-medium text-gray-100">{data.text}</p>
                           </div>

                           {/* Footer line and Company Data */}
                           <div className="flex flex-col gap-4">
                              <hr className="border-white opacity-90" />
                              <div className="flex items-center gap-3">
                                 {data.company ? (
                                    <>
                                       {/* Company Image */}
                                       <div className="w-7 h-7 rounded-md bg-white p-1 shrink-0 overflow-hidden">
                                          <img
                                             src={data.company.image}
                                             alt={data.company.name}
                                             className="w-full h-full object-contain"
                                          />
                                       </div>
                                       {/* Company Name and Description */}
                                       <div className="flex flex-col overflow-hidden">
                                          <p className="text-sm font-semibold truncate">{data.company.name}</p>
                                          <p className="text-xs text-gray-400 truncate">{data.company.website}</p>
                                       </div>
                                    </>
                                 ) : (
                                    <>
                                       {/* Placeholder if no company data */}
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
               </Slider>
            </div>
         </div>
      </div>
   );
}

export default ReviewCard