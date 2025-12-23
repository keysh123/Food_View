import React from "react";
import { Link } from "react-router-dom";

const RegisterFoodPartner = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactName: "",
    address: "",
    phoneNumber: "",
    password: ""
  });
  const handleChange = async (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };
  return (
    <div className="bg-white w-full max-w-sm p-8 rounded-xl border border-gray-300">
      
      {/* Role switch */}
      <div className="flex text-sm mb-6">
        <Link
          to="/user/register"
          className="text-gray-500 hover:text-black mr-4"
        >
          User
        </Link>
        <Link
          to="/foodPartner/register"
          className="font-medium text-black"
        >
          Food Partner
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-1">
        Partner registration
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Create your food partner account
      </p>

      <form className="space-y-4">
        <input
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          type="text"
          placeholder="Firstname"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Lastname"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="E-mail"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="contactName"
          value={data.contactName}
          onChange={handleChange}
          type="text"
          placeholder="Contact Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="address"
          value={data.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
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

        <button
          className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition"
        >
          Register partner
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6">
        Already registered?{" "}
        <Link to="/foodPartner/login" className="text-black font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterFoodPartner;
