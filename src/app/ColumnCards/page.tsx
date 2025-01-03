'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function VipSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-red-900 font-extrabold leading-tight mb-4">
          Uncover the Elegance of Our Premium Diamand Collection
        </h2>
        <p className="text-lg md:text-xl text-black mb-8">
          Immerse yourself in the world of opulence with VIP access to exclusive luxury timepieces and extraordinary benefits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="col-span-1 md:col-span-3 bg-black rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/g1.jpg"
            alt="Exquisite Gold Bridal Sets"
            width={200}
            height={200}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-red-900/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Exclusive Gold Bridal Sets</h3>
            <p className="text-sm mt-2">Timeless gold sets designed to bring unmatched grace and luxury to your wedding day.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-black rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/g.jpg"
            width={200}
            height={200}
            alt="Gold & Diamond Bangles"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-red-900/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Timeless Gold & Diamond Bangles</h3>
            <p className="text-sm mt-2">Exclusively crafted bangles that reflect sophistication and charm.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-black rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/g4.jpg"
            alt="Royal Bridal Set"
            width={200}
            height={200}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-red-900/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">The Royal Bridal Set</h3>
            <p className="text-sm mt-2">Indulge in the luxury of royal elegance with our regal bridal jewelry collection.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-black rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/g5.jpeg"
            alt="Limited Edition Gold Sets"
            width={200}
            height={200}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-red-900/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Limited Edition Gold Sets</h3>
            <p className="text-sm mt-2">Unlock exclusive access to limited-edition gold set releases and special rewards.</p>
          </div>
        </motion.div>
      </div>

      <div className="bg-gray-900 py-12 mt-20 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4">Stay in the Loop with Our VIP Offers</h2>
          <p className="text-lg text-black mb-8">
            Subscribe now to receive premium updates, VIP rewards, and exclusive new arrivals directly to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 w-full sm:w-80 md:w-96 border border-red-900 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <motion.button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-red-800 to-red-950 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
}
