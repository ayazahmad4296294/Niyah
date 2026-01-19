import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewForm = ({ companyName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review submitted for ${companyName}!`);
    // Reset form
    setFormData({ name: '', email: '', review: '' });
    setRating(0);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
      <h3 className="text-xl font-bold text-primary mb-4">Write a Review for {companyName}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating Stars */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Your Rating</label>
          <div className="flex gap-1">
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

        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors active:scale-95"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;