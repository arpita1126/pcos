import React from "react";
import logo from "../../assets/logo.png"; // Ensure the path to the logo is correct

const Homescreen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="mb-5">
          <img src={logo} alt="Ovahealth Logo" className="w-45 h-auto" />
        </div>
        <div className="text-l text-red-950 mx-auto mb-10">
          Simplifying PCOS diagnosis through advanced AI, empowering women's health decisions.
        </div>

        {/* Diagnosis Form Section */}
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Age Input */}
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Upload Image */}
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-800 rounded-md shadow-md hover:bg-blue-900 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Run Diagnosis
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
