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
import Blog from './pages/Blog'

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
        <Route path="/certified-companies" element={<CertifiedCompanies />} />
        <Route path="/new-company" element={<NewCompanyForm />} />
        <Route path="/trust-report" element={<TrustReport />} />
        <Route path="/service-level-agreements" element={<ServiceLevelAgreements />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </CompanyProvider>
  )
}

export default App