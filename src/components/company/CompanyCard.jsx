import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
// Using logo as placeholder since companylogo.webp might be missing

const CompanyCard = ({ company, index }) => {
  if (!company) return null;

  return (
    <div
      data-aos="zoom-out-blur"
      data-aos-delay={index * 100}
      data-aos-duration="600"
      className="rounded-xl overflow-hidden border-2 border-primary/20 group flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <Link to={`/company/${company.id}`} className="flex flex-col h-full">
        {/* Image Container */}
        <div className="h-48 bg-white flex items-center justify-center p-8">
          <img
            src={company.image}
            alt={company.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="bg-primary px-6 py-8 flex flex-col grow items-start gap-3">
          <span className="inline-block px-1 py-[2px] bg-white text-primary font-medium text-[10px] rounded-[4px] border border-gray-200">
            {company.category}
          </span>
          <h3 className="text-xl font-medium text-white leading-normal">
            {company.name}
          </h3>
          <p className="text-white text-md">{company.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CompanyCard;