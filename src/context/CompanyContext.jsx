import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CompanyContext = createContext();

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
};

export const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Adjust URL based on your env or proxy setup. Assuming vite proxy or absolute URL for now.
                // If vite proxy is set to /api -> http://localhost:5000, then just /api/companies works.
                // Using full URL for safety in dev if proxy not confirmed, but typically relative is better with proxy.
                // Let's assume standard Vite proxy setup or cors is enabled on backend (it is).
                const response = await axios.get('/api/companies');
                setCompanies(response.data);
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
