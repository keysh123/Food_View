import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const handleChange = async (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await fetch("http://localhost:3000/api/auth/user/register", {
      method: "POST",
       credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName : data.firstName+" "+data.lastName,
        email : data.email,
        password:data.password
      })
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="bg-white w-full max-w-sm p-8 rounded-xl border border-gray-300">
      
      <div className="flex text-sm mb-6">
        <Link to="/user/register" className="font-medium text-black mr-4">
          User
        </Link>
        <Link to="/foodPartner/register" className="text-gray-500 hover:text-black">
          Food Partner
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-1">Create account</h1>
      <p className="text-sm text-gray-500 mb-6">
        Create a new user account
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <input
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <button
          className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition"
        >
          Create account
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/user/login" className="text-black font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterUser;
