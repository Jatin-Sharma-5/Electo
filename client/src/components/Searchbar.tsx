import React from 'react';
import { Bell, Home, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const Searchbar = () => {
  return (
    <div className="hidden   sm:flex items-center gap-2 px-2 py-1 shadow-md rounded-md ring-1 ring-blue-200">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        id='search'
        type="text"
        placeholder="Search..."
        className="outline-none"
      />
     
    </div>
  );
};

export default Searchbar;
