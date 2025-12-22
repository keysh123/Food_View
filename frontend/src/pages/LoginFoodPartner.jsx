import React from 'react'

const LoginFoodPartner = () => {
  return (
    <>
    <div className="bg-white flex w-[90%] p-5 flex-col justify-center items-center md:w-[25%] shadow-lg rounded-lg">
        <h1 className="text-4xl mb-8">Login Food Partner</h1>
        <form
          action=""
          className="flex gap-3 flex-col justify-center items-center w-full"
        >
          <input
            className="border border-gray-300 rounded-md px-2 py-2 w-full"
            type="email"
            name=""
            id=""
            placeholder="E-mail"
          />

          <input
            className="border border-gray-300 rounded-md px-2 py-2 w-full"
            type="password"
            name=""
            id=""
            placeholder="password"
          />

          <button
            className="bg-blue-500 text-white text-xl mt-4 rounded-lg w-full py-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LoginFoodPartner