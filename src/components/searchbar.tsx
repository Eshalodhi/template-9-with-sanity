"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); 
      setQuery(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-gray-800 border border-orange-500 rounded-full px-4 py-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-32 sm:w-64"
      />
      <button type="submit" className="text-white hover:text-orange-500">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
