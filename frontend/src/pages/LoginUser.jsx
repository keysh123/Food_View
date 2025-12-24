import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LoginUser = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:3000/api/auth/user/login",
      {
        method: "POST",
       

        headers: {
          "Content-Type": "application/json",
        },
         credentials: "include",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }
    );

    const result = await response.json();
    console.log(result);

    if (response.status === 200) {
      toast.success("User login successfully");
    } else {
      toast.error(result.message || "Login failed");
    }

  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};

  return (
    <div className="bg-white w-full max-w-sm p-8 rounded-xl border border-gray-300">
      <div className="flex text-sm mb-6">
        <Link to="/user/login" className="font-medium text-black mr-4">
          User
        </Link>
        <Link
          to="/foodPartner/login"
          className="text-gray-500 hover:text-black"
        >
          Food Partner
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-1">Sign in</h1>
      <p className="text-sm text-gray-500 mb-6">
        Continue with your user account
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
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

        <button className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition">
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
