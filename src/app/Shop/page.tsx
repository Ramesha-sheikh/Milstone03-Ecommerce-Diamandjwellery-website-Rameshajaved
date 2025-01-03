"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posts from "../../product-detail/data.json";
import React, { useState } from "react";
import { FaTachometerAlt, FaBox, FaCog, FaUserCircle, FaBars, FaFilter, FaSearch } from "react-icons/fa"; // React Icons for sidebar

const AllProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed initially
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Price filter range (min, max)

  const sortedProducts = [...posts]
    .filter((product) => categoryFilter === "all" || product.name.toLowerCase().includes(categoryFilter))
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOption === "low-high") return a.price - b.price;
      if (sortOption === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-gradient-to-r from-red-600 to-black text-white p-6 space-y-6 transition-all duration-300 overflow-hidden md:w-64 sm:w-64 hidden md:hidden lg:block`} // Gradient from red to black
      >
        <h3 className="text-2xl font-semibold mb-4">Dashboard</h3>
        <ul className="space-y-4">
          <li className="md:hidden sm:hidden">
            <Link href="/dashboard" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-blue-400">
                <FaTachometerAlt />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaBox className='text-red-200'/>
                <span>All Products</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/checkout" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaBox className='text-red-200'/>
                <span>Orders</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/analytics" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaCog className='text-red-200' />
                <span>Analytics</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/help" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaCog className='text-red-200'/>
                <span>Help</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/reviews" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaUserCircle className='text-red-200' />
                <span>Reviews</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/faq" passHref>
              <div className="flex items-center space-x-2 text-lg hover:text-red-400">
                <FaUserCircle className='text-red-200'/>
                <span>FAQ</span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="border-t-2 border-gray-600 mt-4 pt-4" />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mt-6 py-2 px-4 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 md:hidden"
        >
          {sidebarOpen ? "Close Sidebar" : <FaBars />}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full p-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          All Products
        </motion.h2>

        {/* Filters and Price Range */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <FaFilter className="mr-2 text-xl" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"
            >
              <option value="default">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="price-range" className="mr-2 text-lg">Price Range</label>
            <input
              type="range"
              id="price-range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-32 "
            />
            <span className="ml-2 text-gray-700">${priceRange[1]}</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
            <FaSearch className="mr-2 text-xl" />
            <input
              type="text"
              placeholder="Search Products"
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 w-full sm:w-[100%] md:w-[20vw] lg:w-64"
              onChange={(e) => setCategoryFilter(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-56 object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-red-950 truncate">{product.name}</h3>
                <p className="text-lg font-medium text-red-600 mb-4">${product.price}</p>

                <div className="mt-auto">
                  <Link href={`/product/${product.id}`} passHref>
                    <button className="w-full bg-gradient-to-r from-red-800 to-black text-white py-2 rounded-lg shadow-md hover:bg-red-500 transition-all duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllProducts;
