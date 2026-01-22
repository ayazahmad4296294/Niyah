import React from 'react'
import Navbar from '../components/common/Navbar'
import Header from '../components/common/Header'
import CompanyCard from '../components/company/CompanyCard'
import Trust from '../components/Trust'
import ReviewCard from '../components/reviews/ReviewCard'
import Footer from '../components/common/Footer'
import { useCompany } from '../context/CompanyContext'

const Home = () => {
  const { companies } = useCompany();

  return (
    <div className='w-full h-auto'>
      <Navbar />
      <Header />

      <div className="w-full px-6 md:px-10 py-12">
        {/* Category 1 */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10">
            Best In Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {companies.slice(0, 4).map((company, index) => (
              <CompanyCard key={company._id} company={company} index={index} />
            ))}
          </div>
        </div>

        {/* Category 2 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10">
            Top Rated Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {companies.slice(4, 8).map((company, index) => (
              <CompanyCard key={company._id} company={company} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Trust />
      <ReviewCard />
      <Footer />
    </div>
  )
}

export default Home