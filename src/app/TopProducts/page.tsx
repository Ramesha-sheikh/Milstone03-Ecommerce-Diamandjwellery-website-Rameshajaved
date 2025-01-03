'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'White Daimand Ring', price: 100, imageUrl: '/n1.jpeg' }, 
  { id: 2, name: 'White Daimand Earrings', price: 150, imageUrl: '/n2.jpeg' },
  { id: 3, name: 'Daimand Ring ', price: 200, imageUrl: '/n3.jpg' },
  { id: 4, name: 'Daimand Cristal Ring', price: 250, imageUrl: '/n4.jpeg' }, 
  { id: 5, name: 'Daimand Bridal Set', price: 300, imageUrl: '/n5.jpeg' }, 
  { id: 6, name: 'Majestic Daimand Choker', price: 350, imageUrl: '/n6.jpg' }, 
  { id: 7, name: 'Daimand Bridal Necklace', price: 200, imageUrl: '/n7.jpg' }, 
  { id: 8, name: 'Bridal Daimand Bangles', price: 300, imageUrl: '/n8.jpg' }, 
];

const TopProducts = () => {
  return (
    <div className="my-24">
      <h2 className="text-3xl font-semibold text-red-800 text-center mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-72 object-cover mb-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-red-600">{product.name}</h3>
              <p className="text-lg font-medium text-black mb-4">${product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="w-full bg-gradient-to-r from-red-500 to-black text-white py-2 rounded-lg shadow-md hover:opacity-90 transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
