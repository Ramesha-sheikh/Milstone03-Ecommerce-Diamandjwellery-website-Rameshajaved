/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import posts from "../../../product-detail/data.json";
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  longDescription: string;
  sizes: string[];
  stock: number;
  reviews: { rating: number; text: string }[];
  category?: string;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const product = posts.find((post) => post.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [progress, setProgress] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loadingRelated, setLoadingRelated] = useState<{ [key: number]: boolean }>({});
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const router = useRouter();

  const handleAddToCart = (item: Product) => {
    if (!item.sizes.length && !selectedSize) {
      setError('Please select a size!');
      return;
    }
    if (quantity > item.stock) {
      setError('Not enough stock available.');
      return;
    }
    setError('');

    const cartItem = {
      productId: item.id,
      quantity,
      size: item.sizes.length ? item.sizes : selectedSize,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,  
    };

    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...currentCart, cartItem]));

    setMessage('Successfully added to cart!');
    setProgress(100);
    setLoading(true);

    setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            setMessage('');
            setLoading(false);
            router.push('/cart');
            return 0;
          }
          return prev - 5;
        });
      }, 50);
    }, 300);
  };

  const handleRelatedProductClick = (relatedProduct: Product) => {
    setLoadingRelated((prev) => ({ ...prev, [relatedProduct.id]: true }));
    handleAddToCart(relatedProduct);
    setLoadingRelated((prev) => ({ ...prev, [relatedProduct.id]: false }));
  };

  useEffect(() => {
    const sortedRelatedProducts = posts
      .filter((relatedProduct) =>
        relatedProduct.category === product.category && relatedProduct.id !== product.id
      )
      .slice(0, 4);  

    setRelatedProducts(sortedRelatedProducts);  
  }, [product.category, product.id]);  
  return (
    <div className="p-8 flex flex-col items-center max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-red-950">{product.name}</h1>

      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={150}
        className="rounded-lg shadow-xl mb-6"
      />

      <p className="text-2xl font-semibold text-red-800 mb-4">${product.price}</p>
      <p className="text-lg text-slate-600 mb-6 leading-relaxed">{product.description}</p>

      <div className="w-full sm:w-1/2 mb-6">
        <label htmlFor="size" className="text-lg font-semibold text-red-800">
          Select Size:
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-red-500"
        >
          <option value="">Choose Size</option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div className="w-full sm:w-1/2 mb-6">
        <label htmlFor="quantity" className="text-lg font-semibold text-gray-800">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-black-500"
          min="1"
          max={product.stock}
        />
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gradient-to-r from-red-600 to-black text-white py-3 px-8 rounded-lg shadow-md hover:bg-black transition-all duration-300"
      >
        Add to Cart
      </button>

      {message && (
        <div className="fixed top-16 right-4 bg-green-600 text-white p-4 rounded-lg shadow-md max-w-xs w-full z-50">
          <p>{message}</p>
          <div
            className="w-full h-1 bg-green-400 mt-2"
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
          />
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}

      <div className="mt-8 w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <MemoizedRelatedProduct
              key={relatedProduct.id}
              relatedProduct={relatedProduct}
              handleRelatedProductClick={handleRelatedProductClick}
              loading={loadingRelated[relatedProduct.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const RelatedProduct = ({ relatedProduct, handleRelatedProductClick, loading }: any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Link href={`/product/${relatedProduct.id}`}>
        <Image
          src={relatedProduct.imageUrl}
          alt={relatedProduct.name}
          height={200}
          width={200}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      </Link>
      <p className="text-lg font-semibold text-gray-700">{relatedProduct.name}</p>
      <p className="text-sm text-gray-600">${relatedProduct.price}</p>
      <button
        onClick={() => handleRelatedProductClick(relatedProduct)}
        className="mt-2 bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-black transition-all duration-300"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
      
    </div>
  );
};

// Memoizing the related product component to prevent unnecessary re-renders
const MemoizedRelatedProduct = memo(RelatedProduct);

export default ProductDetail;
