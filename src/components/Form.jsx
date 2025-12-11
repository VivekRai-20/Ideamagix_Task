import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // your submit logic
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border border-gray-100">
      <h3 className="text-3xl font-semibold text-blue-600 mb-2 italic">
        Need Help?
      </h3>

      <p className="text-gray-500 text-sm mb-6">
        Just let us know. We will be happy to assist you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs text-gray-500 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            aria-label="Full Name"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs text-gray-500 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            aria-label="Email"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs text-gray-500 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            aria-label="Phone Number"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs text-gray-500 mb-2">
            Describe Your Treatment Requirement
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirement..."
            aria-label="Describe your treatment requirement"
            rows="5"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white py-3 rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default Form;
