import countryFacts from "../api/countryData.json";
import { MdLocationCity, MdPeople, MdEmojiObjects } from "react-icons/md";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Here are the Interesting Facts
            </span>
            <br />
            <span className="text-gray-700">we're proud of</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fascinating details about countries around the world that showcase our planet's diversity and wonder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {countryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country;
            return (
              <div 
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100" 
                key={id}
              >
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{countryName}</h3>
                  <div className="w-16 h-1 bg-white bg-opacity-50 rounded-full"></div>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <div className="space-y-5">
                    {/* Capital */}
                    <div className="flex items-start group-hover:text-indigo-600 transition-colors duration-300">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                        <MdLocationCity className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Capital</p>
                        <p className="text-lg font-medium text-gray-900">{capital}</p>
                      </div>
                    </div>
                    
                    {/* Population */}
                    <div className="flex items-start group-hover:text-indigo-600 transition-colors duration-300">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                        <MdPeople className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Population</p>
                        <p className="text-lg font-medium text-gray-900">{population}</p>
                      </div>
                    </div>
                    
                    {/* Interesting Fact */}
                    <div className="flex items-start group-hover:text-indigo-600 transition-colors duration-300">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                        <MdEmojiObjects className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Interesting Fact</p>
                        <p className="text-lg font-medium text-gray-900">{interestingFact}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="mt-8 pt-5 border-t border-gray-100 flex justify-center">
                    <div className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors duration-300">
                      <span>Learn more</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};