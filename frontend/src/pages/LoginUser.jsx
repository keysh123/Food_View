import React from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <div className="bg-white w-full max-w-sm p-8 rounded-xl border border-gray-300">
      
      <div className="flex text-sm mb-6">
        <Link to="/user/login" className="font-medium text-black mr-4">
          User
        </Link>
        <Link to="/foodPartner/login" className="text-gray-500 hover:text-black">
          Food Partner
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-1">Sign in</h1>
      <p className="text-sm text-gray-500 mb-6">
        Continue with your user account
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <button
          className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition"
        >
          Sign in
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link to="/user/register" className="text-black font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginUser;
