import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AuthForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isRegisterPath = location.pathname === '/register';
    const [isLogin, setIsLogin] = useState(!isRegisterPath);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const { login } = useAuth();

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError('');
        setMessage('');
        setFormData({ name: '', email: '', password: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        const endpoint = isLogin ? '/login' : '/register';
        const url = `/api/auth${endpoint}`;

        try {
            const response = await axios.post(url, formData);

            if (isLogin) {
                // Login Success - Use Context
                login(response.data, response.data.token);
                navigate('/'); // Redirect to home
            } else {
                // Register Success
                setMessage(response.data.message);
                setIsLogin(true); // Switch to login view
                setFormData({ name: '', email: '', password: '' });
            }
        } catch (err) {
            console.error("Auth Error:", err);
            const msg = err.response?.data?.message || err.message || 'Something went wrong';
            setError(msg);
        }
    };

    const inputClass = "w-full px-4 py-2.5 rounded-xl border-1 border-primary/10 focus:border-primary focus:outline-none transition-colors text-lg bg-gray-50";
    const labelClass = "block text-sm font-semibold text-primary";

    return (
        <div className="w-full max-w-md bg-white p-7 md:px-10 py-5 rounded-2xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
                {isLogin ? 'Login' : 'Register'}
            </h2>

            {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">{error}</div>}
            {message && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center">{message}</div>}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={inputClass}
                            required={!isLogin}
                        />
                    </div>
                )}

                <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label className={labelClass}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={inputClass}
                        required
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

                <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                >
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
