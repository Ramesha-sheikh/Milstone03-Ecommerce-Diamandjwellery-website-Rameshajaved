"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function VipFooter() {
  return (
    <footer className="bg-gradient-to-r from-black via-red-700 to-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-red-700 via-gray-700 to-red-700 mb-6"></div>

        {/* VIP Program Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-3 text-red-400">VIP Membership</h3>
          <p className="text-sm text-gray-200">
            Join our VIP program to enjoy exclusive rewards, early access, and special discounts.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <motion.a
            href="#"
            className="text-3xl text-white hover:text-red-500"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl text-white hover:text-red-500"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl text-white hover:text-red-500"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Diamond Dusk. Crafted with ❤️ for luxury.
        </div>
      </div>
    </footer>
  );
}
