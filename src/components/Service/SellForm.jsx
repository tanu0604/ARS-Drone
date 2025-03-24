import React from "react";

function SellForm() {
  return (
    <div className="bg-black text-white border border-white p-6 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Sell Your Drone
      </h2>
      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label className="block mb-2">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Enter your first name"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Enter your last name"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* City */}
        <div>
          <label className="block mb-2">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* Drone Model */}
        <div>
          <label className="block mb-2">Model</label>
          <input
            type="text"
            placeholder="Enter the drone model"
            className="w-full p-2 rounded bg-black border border-white text-white"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block mb-2">Condition</label>
          <select className="w-full p-2 rounded bg-black border border-white text-white">
            <option>Excellent - Never used or rarely used</option>
            <option>Great - Used, mint condition without scratches</option>
            <option>Good - Used, with minor scratches</option>
            <option>Average - Heavily used, visible scratches</option>
            <option>Damaged - Good for parts only</option>
          </select>
        </div>

        {/* Available Items */}
        <div>
          <label className="block mb-2">
            Select All that are Available with You
          </label>
          <div className="space-y-2">
            <div>
              <input type="checkbox" id="invoice" className="mr-2" />
              <label htmlFor="invoice">Purchase Invoice</label>
            </div>
            <div>
              <input type="checkbox" id="box" className="mr-2" />
              <label htmlFor="box">Manufacturer's Box</label>
            </div>
            <div>
              <input type="checkbox" id="accessories" className="mr-2" />
              <label htmlFor="accessories">Original Accessories</label>
            </div>
            <div>
              <input type="checkbox" id="warranty" className="mr-2" />
              <label htmlFor="warranty">Warranty Card</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellForm;
