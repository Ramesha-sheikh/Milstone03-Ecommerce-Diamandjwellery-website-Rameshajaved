import React from 'react';

const Help = () => {
  return (
    <div className="py-16 px-6 sm:px-10 lg:px-20 min-h-screen">
      <div className="max-w-screen-xl mx-auto text-center text-red-950">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Need Assistance with Your Diamand Experience?
        </h2>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          Our dedicated team is here to assist you with anything related to our beautiful jewelry pieces.
        </p>

        {/* Help Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-red-800 to-red-950 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
            <p className="text-lg mb-6">Get instant answers to the most common questions about our jewelry collection and services.</p>
            <a
              href="/faq"
              className="inline-block bg-white text-red-950 hover:bg-gray-200 py-2 px-6 rounded-full font-semibold transition-all"
            >
              Explore FAQs
            </a>
          </div>

          {/* Product Inquiries Section */}
          <div className="bg-gradient-to-r from-red-800 to-red-950 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Product Inquiries</h3>
            <p className="text-lg mb-6">Want to know more about a specific piece? Our experts are here to help you make the perfect choice.</p>
            <a
              href="/contact-us"
              className="inline-block bg-white text-red-950 hover:bg-gray-200 py-2 px-6 rounded-full font-semibold transition-all"
            >
              Ask Us
            </a>
          </div>

          {/* Order Support Section */}
          <div className="bg-gradient-to-r from-red-800 to-red-950 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Order Support</h3>
            <p className="text-lg mb-6">Need help with your order? Let us assist you in tracking, delivery, or any other concern.</p>
            <a
              href="/order-support"
              className="inline-block bg-white text-red-950 hover:bg-gray-200 py-2 px-6 rounded-full font-semibold transition-all"
            >
              Track Order
            </a>
          </div>
        </div>

        {/* Contact Us Call-To-Action */}
        <div className="mt-16 bg-white text-center p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Need More Personalized Assistance?
          </h3>
          <p className="text-lg text-gray-600 mb-8 opacity-80">
            If you require one-on-one support or have specific questions, don’t hesitate to contact our team of experts.
          </p>
          <a
            href="/Contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-800 to-red-950 hover:bg-red-400 text-white rounded-xl text-xl font-semibold transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
