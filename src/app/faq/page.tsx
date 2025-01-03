"use client"
import Link from 'next/link';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the dropdown arrow icon

const FAQ = () => {
  return (
    <div>
      {/* Component */}
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What types of gold jewelry do you offer?</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <FaChevronDown className="transform transition-transform" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offer a wide variety of gold jewelry, including rings, necklaces, bracelets, and earrings in 22k, 24k, and custom designs.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I take care of my gold jewelry?</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <FaChevronDown className="transform transition-transform" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To maintain the shine and value of your gold jewelry, avoid exposure to harsh chemicals and store it in a safe place when not in use.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I customize my jewelry?</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <FaChevronDown className="transform transition-transform" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we offer customization options for various types of jewelry, including engraving and custom design requests.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Do you offer jewelry repairs or resizing?</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <FaChevronDown className="transform transition-transform" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we provide resizing and repair services for many types of jewelry. Contact us for more details.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Is the gold jewelry hypoallergenic?</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  <FaChevronDown className="transform transition-transform" />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, our jewelry is made with hypoallergenic materials, designed to minimize irritation and allergies for sensitive skin.
              </p>
            </details>
          </div>
          {/* Add more FAQ items here */}
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mt-8">
  <Link
    href="/contact"
    className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105"
  >
    For More Details, Contact Us
  </Link>
</div>


      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .group-open\:animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
