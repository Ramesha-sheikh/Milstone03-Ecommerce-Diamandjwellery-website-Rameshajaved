"use client";

import { useState } from "react";

export default function VipSection() {

  const [showMore, setShowMore] = useState(false);

  return (

    <section
      className="relative bg-black text-white py-20"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Unlock Exclusive Benefits with Our VIP Program
        </h2>
        <p className="text-lg md:text-xl mb-12 text-red-400">
          Join our VIP program and gain access to a curated shopping experience with exclusive offers and early releases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-red-400">
              <i className="fas fa-gift">Exclusive Discounts</i>
            </div>
            <p>Enjoy VIP-only discounts on a wide range of products updated regularly.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-red-400">
              <i className="fas fa-star">Early Access</i>
            </div>
            <p>Be the first to shop new collections and limited-edition releases.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-red-400">
              <i className="fas fa-user-secret">Personalized Service</i>
            </div>
            <p>Get personalized product recommendations and a tailored shopping experience.</p>
          </div>

          {showMore && (
            <>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-red-400">
                  <i className="fas fa-crown">Priority Support</i>
                </div>
                <p>Access our priority support team for fast and exclusive customer service.</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-red-400">
                  <i className="fas fa-box-open">Free Shipping</i>
                </div>
                <p>Get free shipping on all orders as a VIP member.</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-red-400">
                  <i className="fas fa-gem">Exclusive Gifts</i>
                </div>
                <p>Receive VIP-only gifts and rewards throughout the year.</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 border-2 border-white bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>

      </div>

    </section>

  );
}
