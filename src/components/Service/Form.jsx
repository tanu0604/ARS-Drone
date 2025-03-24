import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    modelName: '',
    experience: '',
    workplace: '',
    aadhar: null,
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white border border-white p-6 rounded-lg max-w-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name: <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email: <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">
          Phone Number: <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block mb-2">
          City: <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="modelName" className="block mb-2">
          Model Name: <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="modelName"
          name="modelName"
          placeholder="Enter the model name"
          value={formData.modelName}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Do you have prior experience flying professional drones?{' '}
          <span className="text-red-500">*</span>
        </label>
        <div>
          <input
            type="radio"
            id="yes"
            name="experience"
            value="yes"
            checked={formData.experience === 'yes'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="yes" className="mr-4">
            Yes
          </label>

          <input
            type="radio"
            id="no"
            name="experience"
            value="no"
            checked={formData.experience === 'no'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="aadhar" className="block mb-2">
          Upload Aadhar: <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          id="aadhar"
          name="aadhar"
          accept=".pdf,.jpg,.png"
          onChange={handleChange}
          required
          className="w-full text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="requirements" className="block mb-2">
          Explain your requirement: <span className="text-red-500">*</span>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          placeholder="Explain your requirement"
          value={formData.requirements}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-black border border-white text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
