import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-light-beige">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-crimson-red">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-midnight-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email or Username
            </label>
            <input
              className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-midnight-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-deep-purple rounded w-full py-2 px-3 text-midnight-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-crimson-red hover:bg-deep-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-midnight-black">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-crimson-red hover:text-deep-purple font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
