import { useState } from "react";
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaTimes, FaUndo } from "react-icons/fa";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };
  
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  
  const clearSearch = () => {
    setSearch("");
  };
  
  const resetFilters = () => {
    setSearch("");
    setFilter("all");
    // Reset to original order (by ID or any default)
    const sortCountry = [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common));
    setCountries(sortCountry);
  };

  return (
    <section className="py-6 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg mb-8 border border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Input */}
          <div className="w-full lg:w-2/5">
            <div className={`relative transition-all duration-300 ${isFocused ? 'ring-2 ring-indigo-500 rounded-lg' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
              />
              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  aria-label="Clear search"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Sort Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => sortCountries("asc")}
              className="flex items-center px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 shadow-sm"
              aria-label="Sort ascending"
            >
              <FaSortAmountUp className="mr-2 text-indigo-600" />
              <span className="hidden sm:inline">A-Z</span>
            </button>
            <button
              onClick={() => sortCountries("des")}
              className="flex items-center px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 shadow-sm"
              aria-label="Sort descending"
            >
              <FaSortAmountDown className="mr-2 text-indigo-600" />
              <span className="hidden sm:inline">Z-A</span>
            </button>
          </div>
          
          {/* Region Filter */}
          <div className="w-full lg:w-1/4">
            <div className="relative">
              <select
                value={filter}
                onChange={handleSelectChange}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 appearance-none bg-white shadow-sm"
              >
                <option value="all">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="flex items-center px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 shadow-sm"
          >
            <FaUndo className="mr-2" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
        
        {/* Active Filters Display */}
        {(search || filter !== "all") && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 font-medium">Active filters:</span>
            {search && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Search: {search}
                <button onClick={clearSearch} className="ml-2 text-indigo-600 hover:text-indigo-900">
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
            {filter !== "all" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Region: {filter}
                <button onClick={() => setFilter("all")} className="ml-2 text-purple-600 hover:text-purple-900">
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};