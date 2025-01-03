import React from 'react';
import Image from 'next/image';
const Reviews = () => {
  return (
    <div className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-orange-950 mb-8">
          What Our Customers Are Saying
        </h2>
        <p className="text-xl sm:text-2xl text-orange-800 mb-16">
          Hear from those who have experienced the luxury and beauty of Diamond Dusk&apos;s jewelry collection.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <Image
                 src="/gi1.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">Maha</h3>
            <p className="text-lg text-gray-600 mb-4">The craftsmanship and elegance of these pieces are beyond words. I wear my necklace every day!</p>
            <div className="flex justify-center mb-4">
              {/* Star Rating */}
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <Image
                     src="/gi2.jpeg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">Sana</h3>
            <p className="text-lg text-gray-600 mb-4">Absolutely love the gold ring I bought. It is perfect for special occasions and daily wear!</p>
            <div className="flex justify-center mb-4">
              {/* Star Rating */}
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <Image
                    src="/men1.jpeg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">Ali</h3>
            <p className="text-lg text-gray-600 mb-4">The jewelry exceeded my expectations. The gold&apos;s shine and quality are unmatched!</p>
            <div className="flex justify-center mb-4">
              {/* Star Rating */}
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
        </div>

        {/* Call-to-action Button */}
        <div className="mt-12">
          <a
            href="/contact-us"
            className="px-8 py-4 bg-gradient-to-r from-orange-800 to-orange-950  hover:bg-orange-600 text-white rounded-xl text-xl font-semibold transition-all"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
