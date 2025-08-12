import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center py-12 md:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Explore the World, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">One Country</span> at a Time.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 overflow-hidden relative">
                <span className="relative z-10 flex items-center">
                  Start Exploring 
                  <FaLongArrowAltRight className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-indigo-100">
                Learn More
              </button>
            </div>
            
            {/* Stats or features */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                <div className="text-2xl font-bold text-indigo-600">195</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                <div className="text-2xl font-bold text-indigo-600">5</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 animate-tilt"></div>
              <img
                src="/images/world.png"
                alt="world is beauty"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-none drop-shadow-2xl rounded-2xl relative z-10 transform transition-transform duration-5000 hover:rotate-1"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg transform rotate-6 transition-transform duration-500 hover:rotate-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-2xl">🌎</div>
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-xl shadow-lg transform -rotate-6 transition-transform duration-500 hover:rotate-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-2xl">🗺️</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes tilt {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(5deg) scale(1.05);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-tilt {
          animation: tilt 8s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
};