import React from "react";
import { Link } from "react-router-dom";

const LoginFoodPartner = () => {
  const [data, setData] = {
    email: "",
    password: ""
  };
  const handleChange = async (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };
  return (
    <div className="bg-white w-full max-w-sm p-8 rounded-xl border border-gray-300">
      
      <div className="flex text-sm mb-6">
        <Link to="/user/login" className="text-gray-500 hover:text-black mr-4">
          User
        </Link>
        <Link to="/foodPartner/login" className="font-medium text-black">
          Food Partner
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-1">Partner sign in</h1>
      <p className="text-sm text-gray-500 mb-6">
        Access your restaurant dashboard
      </p>

      <form className="space-y-4">
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Business email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <button className="w-full bg-black text-white py-2 rounded-md text-sm">
          Continue
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6">
        New partner?{" "}
        <Link to="/foodPartner/register" className="text-black font-medium">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginFoodPartner;
