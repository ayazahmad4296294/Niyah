import React from 'react';
import TrustReportImg from '../assets/images/trust-report.png';
import { Link } from 'react-router-dom';

const Trust = () => {
    return (
        <div className="bg-primary px-10 py-8 md:p-11 rounded-2xl flex flex-col md:flex-row items-center gap-10 text-white my-16 mx-3 md:mx-auto max-w-7xl">
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">We're Niyah</h2>
                <p className="text-md opacity-85 leading-relaxed mb-8 max-w-xl">
                    We're a verification and review platform built to ensure authenticity across businesses.
                    Our vision is to become the universal symbol of verified trust — helping people engage
                    with confidence, and enabling companies to prove their credibility and improve through
                    genuine feedback.
                </p>
                <Link to="/about" className="bg-white text-black font-medium px-4 py-2 rounded-full border-white border hover:bg-primary hover:text-white hover:border hover:border-white transition-all duration-300 whitespace-nowrap inline-block">
                    What we do
                </Link>
            </div>
            <div className="flex-1 w-full">
                <div className="bg-white p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-black border border-gray-100 shadow-lg">
                    <div className="flex-1">
                        <h3 className="text-xl mb-3">Our new Trust Report has landed!</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Find out which actions we’ve taken to protect you and promote trust on our platform.
                        </p>
                        <Link to="/trust-report" className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium whitespace-nowrap inline-block">
                            Take a look
                        </Link>
                    </div>
                    <div className="w-32 md:w-44 shrink-0">
                        <img src={TrustReportImg} alt="Trust Report Illustration" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust;