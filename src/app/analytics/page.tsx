"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Time period of your choice
    datasets: [
      {
        label: 'Gold Jewelry Sales Over Time',
        data: [1200, 1600, 1800, 2200, 2600, 3000], // Example sales data (in units sold or value)
        borderColor: '#FFD700', // Gold color
        backgroundColor: 'rgba(255, 215, 0, 0.2)', // Light gold background
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Explicitly set 'top' as a literal type
      },
      tooltip: {
        mode: 'index' as const, // Ensure 'index' is one of the valid string literals
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10 bg-white min-h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-orange-950">diamond Analytics</h2>
        <p className="text-lg text-gray-500 mt-2">Track the performance of your diamond jewelry sales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Visitors Section */}
        <div className="bg-gradient-to-r from-orange-800 to-orange-950 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-orange-200">Total Visitors</h3>
          <div className="text-3xl font-bold text-white mt-3">1,500</div>
          <p className="text-sm text-white mt-1">Total visitors this month to the Gold Aura website</p>
        </div>

        {/* Sales Section */}
        <div className="bg-gradient-to-r from-orange-800 to-orange-950 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-orange-200">Total diamond Jewelry Sales</h3>
          <div className="text-3xl font-bold text-white mt-3">120 Pieces</div>
          <p className="text-sm text-white mt-1"> diamondJewelry pieces sold this month</p>
        </div>

        {/* Conversion Rate Section */}
        <div className="bg-gradient-to-r from-orange-800 to-orange-950 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-orange-200">Customer Conversion Rate</h3>
          <div className="text-3xl font-bold text-white mt-3">3.2%</div>
          <p className="text-sm text-white mt-1">Percentage of visitors converted to buyers</p>
        </div>
      </div>

      {/* Performance Graph Section */}
      <div className="mt-10">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-700">diamond Jewelry Sales Performance</h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg mt-5">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
