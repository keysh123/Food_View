import React from "react";

const FoodPartnerForm = () => {
  return (
    <div className="bg-white w-full max-w-md p-8 rounded-xl border border-gray-300">
      
      <h1 className="text-xl font-semibold mb-1">
        Add Food Item
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Enter details about the food item you want to list
      </p>

      <form className="space-y-4">
        
        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            type="text"
            placeholder="e.g. Margherita Pizza"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Description (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            rows="3"
            placeholder="Short description about the food"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none
            focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>
        </div>

        {/* Video Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Video
          </label>
          <input
            type="file"
            accept="video/*"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
            file:border-0 file:bg-transparent file:text-sm
            focus:outline-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            Upload a short video showcasing the food
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md text-sm
          hover:bg-gray-900 transition"
        >
          Save Food Item
        </button>
      </form>
    </div>
  );
};

export default FoodPartnerForm;
