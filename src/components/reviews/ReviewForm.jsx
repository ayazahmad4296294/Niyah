/**
 * ReviewForm.jsx - Interactive Feedback Component
 * Handles the submission of detailed qualitative reviews with star ratings.
 */

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useAuth } from '../../context/AuthContext';

const ReviewForm = ({ companyName, companyId, onReviewSubmitted }) => {
  const { user } = useAuth(); // Access global user context for pre-filling

  // Local state for rating and UI hover effects
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  /**
   * UX Improvement: Pre-fetch Authenticated Data
   * If the user is logged in, automatically fill identity fields to reduce friction.
   */
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const [loading, setLoading] = useState(false);

  /**
   * Submission Handler
   * Validates JWT presence and POSTs review data to the centralized API.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to submit a review');
        setLoading(false);
        return;
      }

      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          companyId: companyId, // Links review to the specific organization
          name: formData.name,
          email: formData.email,
          rating: rating,
          reviewText: formData.review
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Review submitted successfully!');

        // Form Cleanup Logic: Resetting textual feedback while preserving identity
        setFormData({
          name: user?.name || '',
          email: user?.email || '',
          review: ''
        });
        setRating(0);

        /**
         * Parent Communication:
         * Triggers a state refresh in the parent component (e.g., CompanyDetail)
         * to show the newly added review immediately.
         */
        if (onReviewSubmitted) {
          onReviewSubmitted();
        }
      } else {
        alert(data.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-400 h-full">
      <h3 className="text-xl font-bold text-primary mb-4">Write a Review for {companyName}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Responsive Grid for User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Your Review</label>
          <textarea
            required
            rows="4"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
          ></textarea>
        </div>

        {/* Dynamic Star Rating UI */}
        <div className="flex flex-col gap-2 text-center">
          <label className="text-sm font-medium text-gray-700">Your Rating</label>
          <div className="flex gap-1 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl transition-colors"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <FaStar
                  className={(star <= (hover || rating)) ? "text-secondary" : "text-gray-300"}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
            className={`bg-primary text-white font-bold w-full py-3 px-8 rounded-lg transition-colors active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
