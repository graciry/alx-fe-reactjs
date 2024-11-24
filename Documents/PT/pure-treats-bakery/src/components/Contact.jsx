import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure emailjs is installed (npm install emailjs-com)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_hx3jbrr', // Replace with your service ID
        'template_bbvbc77', // Replace with your template ID
        formData, // The form data sent to the template
        'Zv4TIncqK112ftgqa' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id="contact" className="bg-[#C68E17] p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#3E2723] mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-[#3E2723] font-semibold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-[#3E2723] font-semibold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-[#3E2723] font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
            rows="5"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3E2723] text-white py-2 rounded-lg font-semibold hover:bg-[#5A3A2D] transition"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <div
          className={`mt-4 text-center font-semibold ${
            status.includes('successfully')
              ? 'text-green-500'
              : 'text-red-500'
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default Contact;
