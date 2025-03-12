import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with backend API or send an email
    console.log('Form Data Information:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
          {isSubmitted && (
            <div className="mt-4 text-green-500">
              <p>Your message has been sent!</p>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">
            <strong>Email:</strong> apuroy2785@gmail.coom
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> 01786209895
          </p>
          <p>
            <strong>Office Address:</strong> Dhaka,Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
