/**
 * CompanyContext.jsx - Global Shared State (Directory)
 * This context fetches and distributes the master list of organizations.
 * It eliminates the need for redundant API calls across multiple discovery pages.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CompanyContext = createContext();

/**
 * Custom Hook: useCompany
 * Simple interface for consumers to access the directory data, 
 * loading states, and error messages.
 */
export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
};

/**
 * Provider Component
 * Fetches the baseline company dataset on initial mount.
 */
export const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Baseline fetch: retrieves the first page of companies for the directory
                const response = await axios.get('/api/companies');
                if (response.data.success) {
                    setCompanies(response.data.data);
                } else {
                    setCompanies(response.data); // Fallback structure handling
                }
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch companies:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <CompanyContext.Provider value={{ companies, loading, error }}>
            {children}
        </CompanyContext.Provider>
    );
};
