import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AuthForm from '../components/auth/AuthForm';

const AuthPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#FCFBF3]">
            <Navbar />

            <main className="grow flex items-center justify-center pt-32 pb-28 px-6">
                <AuthForm />
            </main>

            <Footer />
        </div>
    );
};

export default AuthPage;
