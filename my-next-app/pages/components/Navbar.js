import React from 'react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-[#fff]">
      <div className="flex items-center space-x-4">
        <img src="/assets/logo.png" alt="Logo" className="h-12 w-15" /> {/* Updated logo path */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search (ctrl + k)"
            className="border border-border rounded-full p-2 pl-10 text-gray-700"
            style={{ height: '32px', width: '200px', backgroundColor: '#f5f8ff', borderRadius: '100px' }}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          <span className="text-[#4B587C]">Launches</span>
          <span className="text-[#4B587C]">Products</span>
          <span className="text-[#4B587C]">News</span>
          <span className="text-[#4B587C]">Community</span>
          <span className="text-[#4B587C]">Advertise</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-4 py-2">
          Subscribe
        </button>
        <button className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-md px-4 py-2">
          Sign in
        </button>
      </div>
    </div>
  );
}
