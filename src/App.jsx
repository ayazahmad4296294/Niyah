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
import FileAComplaint from './pages/TrustAndTransparency/FileAComplaint'
import Blog from './pages/Blog'
import Business from './pages/GetCertified/Business'
import NonProfit from './pages/GetCertified/NonProfit'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <CompanyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/certified-companies" element={<CertifiedCompanies />} />
        <Route path="/new-company" element={<NewCompanyForm />} />
        <Route path="/trust-report" element={<TrustReport />} />
        <Route path="/service-level-agreements" element={<ServiceLevelAgreements />} />
        <Route path="/file-a-complaint" element={<FileAComplaint />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-certified/business" element={<Business />} />
        <Route path="/get-certified/non-profit" element={<NonProfit />} />
      </Routes>
    </CompanyProvider>
  )
}

export default App