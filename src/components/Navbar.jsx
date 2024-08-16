import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaBook, FaUtensils, FaCamera } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-red-700 text-white py-4">
      <div className="container mx-auto flex justify-end mr-9 space-x-6">
        <Link to="/" className="hover:text-lime-400">
          <AiFillHome size={20} />
          <span className="sr-only">Home</span>
        </Link>
        <Link to="/personal-info" className="hover:text-lime-400">
          <FaUserAlt size={20} />
          <span className="sr-only">Personal Info</span>
        </Link>
        <Link to="/books" className="hover:text-lime-400">
          <FaBook size={20} />
          <span className="sr-only">Books</span>
        </Link>
        <Link to="/meals" className="hover:text-lime-400">
          <FaUtensils size={20} />
          <span className="sr-only">Meals</span>
        </Link>
        <Link to="/photo-progress" className="hover:text-lime-400">
          <FaCamera size={20} />
          <span className="sr-only">Photo Progress</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
