import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthForm = () => {
    const location = useLocation();
    const isRegisterPath = location.pathname === '/register';
    const [isLogin, setIsLogin] = useState(!isRegisterPath);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const inputClass = "w-full px-4 py-2.5 rounded-xl border-1 border-primary/10 focus:border-primary focus:outline-none transition-colors text-lg bg-gray-50";
    const labelClass = "block text-sm font-semibold text-primary";

    return (
        <div className="w-full max-w-md bg-white p-7 md:px-10 py-5 rounded-2xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
                {isLogin ? 'Login' : 'Register'}
            </h2>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className={inputClass}
                        />
                    </div>
                )}

                <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label className={labelClass}>Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={inputClass}
                    />
                </div>

                {/* CAPTCHA Placeholder */}
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="captcha"
                        className="w-5 h-5 rounded cursor-pointer accent-primary"
                    />
                    <label htmlFor="captcha" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
                        I am not a robot
                    </label>
                    <div className="ml-auto">
                        <img
                            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                            alt="reCAPTCHA"
                            className="w-8 h-8 opacity-50 grayscale"
                        />
                    </div>
                </div>

                <button className="w-full py-3 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>

            <div className="pt-5 border-t border-gray-100 text-center">
                <p className="text-gray-500 font-medium">
                    {isLogin ? "Don't Have an Account? " : "Already have an account? "}
                    <button
                        onClick={toggleMode}
                        className="text-secondary font-bold hover:underline ml-1"
                    >
                        {isLogin ? 'Sign up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
