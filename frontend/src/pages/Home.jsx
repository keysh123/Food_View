import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white w-full max-w-2xl p-10 rounded-xl border border-gray-300 text-center">
      
      {/* Logo / App Name */}
      <h1 className="text-3xl font-semibold mb-2">
        Foodify
      </h1>
      <p className="text-gray-500 mb-10">
        Order food or manage your restaurant — all in one place
      </p>

      {/* Action cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* User */}
        <div className="border border-gray-300 rounded-lg p-6 text-left">
          <h2 className="text-lg font-medium mb-2">
            Continue as User
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Browse restaurants, order food, and track your orders
          </p>

          <Link
            to="/user/login"
            className="inline-block text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Login / Register
          </Link>
        </div>

        {/* Food Partner */}
        <div className="border border-gray-300 rounded-lg p-6 text-left">
          <h2 className="text-lg font-medium mb-2">
            Continue as Food Partner
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Manage your menu, orders, and restaurant profile
          </p>

          <Link
            to="/foodPartner/login"
            className="inline-block text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Partner Login
          </Link>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-xs text-gray-400 mt-10">
        © 2025 Foodify. All rights reserved.
      </p>
    </div>
  );
};

export default Home;
