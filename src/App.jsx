import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CertifiedCompanies from './pages/CertifiedCompanies'
import { CompanyProvider } from './context/CompanyContext'
import NewCompanyForm from './pages/NewCompanyForm'
import TrustReport from './pages/TrustAndTransparency/TrustReport'
import ServiceLevelAgreements from './pages/TrustAndTransparency/ServiceLevelAgreements'
import RateOrComplaint from './pages/TrustAndTransparency/RateOrComplaint'
import Blog from './pages/Blog'
import Business from './pages/GetCertified/Business'
import NonProfit from './pages/GetCertified/NonProfit'
import About from './pages/About'
import Contact from './pages/Contact'
import AllReviews from './pages/AllReviews'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CompanyDetail from './pages/CompanyDetail'
import ScrollToTop from './components/common/ScrollToTop'
import { AuthProvider } from './context/AuthContext'

const App = () => {

  return (
    <AuthProvider>
      <CompanyProvider>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/certified-companies" element={<CertifiedCompanies />} />
        <Route path="/new-company" element={<NewCompanyForm />} />
        <Route path="/trust-report" element={<TrustReport />} />
          <Route path="/service-level-agreements" element={<ServiceLevelAgreements />} />
        <Route path="/file-complaint" element={<RateOrComplaint />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-certified/business" element={<Business />} />
        <Route path="/get-certified/non-profit" element={<NonProfit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/company/:companyId" element={<CompanyDetail />} />
      </Routes>
      </CompanyProvider>
    </AuthProvider>
  )
}

export default App