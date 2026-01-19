import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const Business = () => {
    return (
        <div className='w-full'>
            <Navbar />

            <main className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 p-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Get Certified for Business</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join the community of ethical businesses committed to transparency and organizational awareness.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Business;