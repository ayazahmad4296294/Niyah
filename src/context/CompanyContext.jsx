import React, { createContext, useContext, useState } from 'react';
import { companiesData } from '../data/companyData';

const CompanyContext = createContext();

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
};

export const CompanyProvider = ({ children }) => {
    const [companies] = useState(companiesData);

    return (
        <CompanyContext.Provider value={{ companies }}>
            {children}
        </CompanyContext.Provider>
    );
};
